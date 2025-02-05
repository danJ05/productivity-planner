import {Component, signal} from '@angular/core';
import {HomeBannerDumbComponent} from './home-banner/home-banner.dumb.component';
import {
  HomepageFeaturesCardListDumbComponent
} from './homepage-features-card-list/homepage-features-card-list.dumb.component';

@Component({
  standalone: true,
  imports: [
    HomeBannerDumbComponent,
    HomepageFeaturesCardListDumbComponent
  ],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss'
})
export class HomePageComponent {

  onBannerCliked() {
    console.log('action when i click on button');
  }

  featureCardList = signal([
    {
      name: 'Planifier sa semaine',
      icon: 'calendar',
      description: 'Visibilité sur les 7 prochains jours',
    },
    {
      name: 'Atteindre ses objectifs',
      icon: 'flag',
      description: 'Priorisation des tâches',
    },
    {
      name: 'Analyser sa productivité',
      icon: 'chart-bar',
      description: 'Visualiser le travail accompli',
    },
  ]);

}
