import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, RouterModule, Routes} from '@angular/router';
import {ServiceDetailsComponent} from './app/components/service-details/service-details.component';
import {ServiceListComponent} from './app/components/service-list/service-list.component';


const routes: Routes = [
  { path: 'services', component: ServiceListComponent },
  { path: 'services/:id', component: ServiceDetailsComponent },
  { path: '', redirectTo: '/services', pathMatch: 'full' }, // Redirect to services on root access
  { path: '**', redirectTo: '/services' } // Redirect other unknown routes to services
];


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
