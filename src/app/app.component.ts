import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {AboutComponent} from './components/about/about.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ServiceListComponent} from './components/service-list/service-list.component';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    ServiceListComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MissanGroupWebsite';
}
