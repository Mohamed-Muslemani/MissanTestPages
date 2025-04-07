import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {MissionComponent} from '../mission/mission.component';
import {IntroductionComponent} from '../introduction/introduction.component';
import {StrategyComponent} from '../strategy/strategy.component';

@Component({
  selector: 'app-about-section-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    MissionComponent,
    IntroductionComponent,
    StrategyComponent
  ],
  templateUrl: './about.component.html',
  standalone: true,
  styleUrl: './about.component.scss'
})

export class AboutComponent{

}
