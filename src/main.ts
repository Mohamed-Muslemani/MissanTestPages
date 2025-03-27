import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

// Import components for routing
import { ServiceDetailsComponent } from './app/components/service-details/service-details.component';
import { ServiceListComponent } from './app/components/service-list/service-list.component';
import { HomeComponent } from './app/components/home/home.component';
import { ProjectComponent } from './app/project/project.component';
import { ContactFormComponent } from './app/contact-form/contact-form.component';
import { ProjectDetailComponent } from './app/project-detail/project-detail.component';
import { AboutComponent } from './app/about/about.component';

const routes: Routes = [
  // Redirect root to home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Components for the routes
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServiceListComponent },
  { path: 'services/:id', component: ServiceDetailsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'about', component: AboutComponent },
  // Catch-all route
  { path: '**', redirectTo: '/services' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
