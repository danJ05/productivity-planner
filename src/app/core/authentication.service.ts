import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


interface FirebaseResponseRegister {
  "expires_in": string,
  "token_type": string,
  "refresh_token": string,
  "id_token": string,
  "user_id": string,
  "project_id": string

}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly #http = inject(HttpClient);


  register(email:string, password:string):Observable<FirebaseResponseRegister> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`;
    const body = {email, password , returnSecureToken : true}
    return this.#http.post<FirebaseResponseRegister>(url,body)
  }
}
