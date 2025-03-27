import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {SERVICES_SUMMARY} from '../../Shared/Data/services-summary';

@Component({
  selector: 'app-service-list',
  imports: [

    NgForOf,
    NgClass,
    RouterLink,
    NgIf,

  ],
  templateUrl: './service-list.component.html',
  standalone: true,
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent implements OnInit {

  services = SERVICES_SUMMARY

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize services data if needed
  }

  viewMore(service: any): void {
    this.router.navigate([`/services/${service.id}`]);
  }


  protected readonly servicesSummary = SERVICES_SUMMARY;
}
