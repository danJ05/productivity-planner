import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './home-banner.dumb.component.html',
  styleUrl: './home-banner.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBannerDumbComponent {

  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly button = input.required<string>();
  readonly clicked = output<void>();
}
