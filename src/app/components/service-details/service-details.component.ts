import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './service-details.component.html',
  standalone: true,
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent implements OnInit {
  private servicesData = [
    {
      id: 1,
      name: 'Preconstruction Planning',
      image: 'assets/images/serviceImage1.png',
      description: `Effective pre-construction services and planning is the cornerstone of a successful construction project.
        Missan Group Inc. for contracting and construction is to serve both the Owner and Specifications as a reliable source
        of current, complete, and accurate information. Comprehensive project management services that ensure every aspect of
        the project is meticulously planned and executed. Our team collaborates closely with all stakeholders to ensure that
        the project meets all standards and is completed on time and within budget. Expert construction consulting services to
        provide guidance and support throughout the entire project lifecycle. We offer tailored solutions to meet specific
        project needs, ensuring efficient and effective execution.`
    },
    {
      id: 2,
      name: 'Project Management',
      image: 'assets/images/serviceImage2.png',
      description: `Comprehensive project management services that ensure every aspect of the project is meticulously planned
        and executed. Our team collaborates closely with all stakeholders to ensure that the project meets all standards and is
        completed on time and within budget. Effective communication is maintained throughout the project to keep everyone
        informed. We use the latest project management tools and methodologies to streamline processes and enhance productivity.
        Our project managers are experienced professionals who are dedicated to delivering quality results and ensuring client
        satisfaction.`
    },
    {
      id: 3,
      name: 'Construction Consulting',
      image: 'assets/images/serviceImage3.png',
      description: `Expert construction consulting services to provide guidance and support throughout the entire project
        lifecycle. We offer tailored solutions to meet specific project needs, ensuring efficient and effective execution.
        Our consultants have extensive experience in the construction industry and are knowledgeable about the latest trends
        and best practices. We provide comprehensive analysis and recommendations to improve project outcomes and mitigate
        risks. Our goal is to help clients achieve their construction objectives and deliver successful projects on time and
        within budget.`
    }
  ];

  services = this.servicesData;
  selectedService: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedService = this.services.find(service => service.id === id);
  }

  selectService(id: number): void {
    this.selectedService = this.services.find(service => service.id === id);
  }
}
