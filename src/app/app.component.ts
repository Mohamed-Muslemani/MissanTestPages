import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {AboutComponent} from './components/about/about.component';
import {ProjectsComponent} from './components/projects/projects.component';


@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AboutComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MissanGroupWebsite';
}
