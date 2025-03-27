import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppComponent } from './app/app.component';
import {provideRouter, RouterModule, Routes} from '@angular/router';
import {ServiceDetailsComponent} from './app/components/service-details/service-details.component';
import {ServiceListComponent} from './app/components/service-list/service-list.component';
import {HomeComponent} from './app/components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home on root access
  { path: 'home', component: HomeComponent },// Redirect to services on root access
  { path: 'services', component: ServiceListComponent },
  { path: 'services/:id', component: ServiceDetailsComponent },
  { path: '**', redirectTo: '/services' } // Redirect other unknown routes to services
];


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
=======
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {ProjectComponent} from './app/project/project.component';
import {ContactFormComponent} from './app/contact-form/contact-form.component';
import {ProjectDetailComponent} from './app/project-detail/project-detail.component';
import {AboutComponent} from './app/about/about.component';

const routes: Routes = [
  {path:'', redirectTo: '/project', pathMatch: 'full'},
  {path: 'project', component: ProjectComponent},
  {path: 'project/:id', component: ProjectDetailComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'about', component: AboutComponent},
  // {path: '**', component: PageNotFoundComponent}
];

bootstrapApplication(AppComponent,
  {
    providers: [
      provideHttpClient(), provideRouter(routes)
    ]
  }).catch(err => console.error(err));
>>>>>>> transitionAnimation
