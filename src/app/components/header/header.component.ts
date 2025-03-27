import {Component, ViewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive

  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleMenu(): void {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("show");
    } else {
      console.error("Menu element not found.");
    }
  }

  @ViewChild('sidenav') sidenav!: MatSidenav;  // Reference the sidenav

  closeSidenav() {
    this.sidenav.close(); // Closes the sidebar when called
  }

}
