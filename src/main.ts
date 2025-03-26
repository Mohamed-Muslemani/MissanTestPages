import { bootstrapApplication } from '@angular/platform-browser';
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
