import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-service-list',
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './service-list.component.html',
  standalone: true,
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent implements OnInit {

  services = [
    {
      id: 1,
      title: 'Preconstruction Planning',
      image: 'assets/images/serviceImage1.png',
      descriptions: [
        'Effective pre-construction services and planning is the cornerstone of a successful construction project.',
        'Missan Group Inc. for contracting and construction is to serve both the Owner and Specifications as a reliable source of current, complete, and accurate information.'
      ]
    },
    {
      id: 2,
      title: 'Project Management',
      image: 'assets/images/serviceImage2.png',
      descriptions: [
        'Comprehensive project management services that ensure every aspect of the project is meticulously planned and executed.',
        'Our team collaborates closely with all stakeholders to ensure that the project meets all standards and is completed on time and within budget.'
      ]
    },
    {
      id: 3,
      title: 'Construction Consulting',
      image: 'assets/images/serviceImage3.png',
      descriptions: [
        'Expert construction consulting services to provide guidance and support throughout the entire project lifecycle.',
        'We offer tailored solutions to meet specific project needs, ensuring efficient and effective execution.'
      ]
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize services data if needed
  }

  viewMore(service: any): void {
    this.router.navigate([`/services/${service.id}`]);
  }
}
