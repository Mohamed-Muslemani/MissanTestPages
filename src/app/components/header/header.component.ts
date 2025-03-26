import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
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

}
