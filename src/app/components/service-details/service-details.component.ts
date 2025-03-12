import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SERVICES_SUMMARY } from '../../data/services-summary';
import { SERVICES_DETAILS } from '../../data/services-details';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
  imports: [
    NgClass,
    NgIf,
    NgForOf
  ],
  standalone: true
})
export class ServiceDetailsComponent implements OnInit {

  servicesSummary = SERVICES_SUMMARY; // For "More Services" section
  servicesDetails = SERVICES_DETAILS; // For detailed service description
  selectedService: any = null;

  constructor(private route: ActivatedRoute, private cdRef: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedService = this.servicesDetails.find(service => service.id === id);
  }

  getEffectiveIndex(service: any): number {
    // Get index from SERVICES_SUMMARY, skipping the selected service
    const visibleServices = this.servicesSummary.filter(s => s.id !== this.selectedService?.id);
    return visibleServices.findIndex(s => s.id === service.id);
  }

  navigateToService(id: number): void {
    this.router.navigate(['/services', id]).then(() => {
      window.location.reload();
    });
  }
}
