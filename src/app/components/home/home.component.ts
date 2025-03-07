import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {AboutComponent} from '../about/about.component';
import {ProjectsComponent} from '../projects/projects.component';
import {ServiceListComponent} from '../service-list/service-list.component';
@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    ServiceListComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
