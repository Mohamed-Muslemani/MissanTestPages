import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-about-section-home',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  standalone: true,
  styleUrl: './about.component.scss'
})

export class AboutComponent{

}
