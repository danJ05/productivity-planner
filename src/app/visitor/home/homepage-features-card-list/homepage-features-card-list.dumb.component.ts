import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {FeatureCardList} from './homepage-feature-card-list.interface';
import {CardModule} from 'primeng/card';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-homepage-features-card-list',
  standalone: true,
  imports: [
    CardModule,
    NgClass
  ],
  templateUrl: './homepage-features-card-list.dumb.component.html',
  styleUrl: './homepage-features-card-list.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageFeaturesCardListDumbComponent {

  readonly featuresCardList = input.required<FeatureCardList>();
}
