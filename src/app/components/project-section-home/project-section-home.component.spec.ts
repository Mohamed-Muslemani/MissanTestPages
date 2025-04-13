import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSectionHomeComponent } from './project-section-home.component';

describe('ProjectSectionHomeComponent', () => {
  let component: ProjectSectionHomeComponent;
  let fixture: ComponentFixture<ProjectSectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectSectionHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
