import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isProductionEnvironment = environment.production
  firebaseProjectId = environment.firebaseConfig.projectId
}

