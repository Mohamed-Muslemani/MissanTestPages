import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {mockProjectData} from '../Shared/Data/mockProject.data';
import {Project} from '../Shared/Modules/project';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [NgFor, RouterLink],
  templateUrl: './project.component.html',
  standalone: true,
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projectList: Project[] = mockProjectData

  categories: string[] = [...new Set(this.projectList.map(p => p.category))]; // Unique categories
  filteredProjects = [...this.projectList]; // Default: show all

  filterProjects(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Type casting to HTMLSelectElement
    const category = selectElement.value;  // Now 'value' is available
    this.filteredProjects = category === 'all' ? [...this.projectList] :
      this.projectList.filter(project => project.category === category);
  }
}
