import {Component, inject} from '@angular/core';
import {AuthenticationService} from './core/authentication.service';
import {switchMap} from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  readonly #authenticationService = inject(AuthenticationService);

  onLogin() {
    const email = 'dev@gmail.com';
    const password = '12345678';

    this.#authenticationService.login(email,password).pipe(
      switchMap(response =>{
        console.log(response);
        const {email,localId,idToken} = response;
        return this.#authenticationService.save(email, localId,idToken)
      })
    ).subscribe(response => console.log(response))
  }
}

