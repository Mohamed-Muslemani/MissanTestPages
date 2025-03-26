import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {NavigationEnd, NavigationStart, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {LoaderComponent} from './loader/loader.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LoaderComponent, NgIf, FooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "MissanGroupWebsite";
  isLoading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true; // Show loader
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => this.isLoading = false, 3000); // Hide loader smoothly
      }
    });
  }
}
