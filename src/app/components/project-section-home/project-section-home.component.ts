import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-project-section-home',
  imports: [
    RouterLink,
    RouterLinkActive

  ],
  templateUrl: './project-section-home.component.html',
  standalone: true,
  styleUrl: './project-section-home.component.scss'
})
export class ProjectSectionHomeComponent {

}
