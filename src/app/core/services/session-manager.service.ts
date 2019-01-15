import { Injectable } from '@angular/core';
import { User } from '../definition/user';
import { Observable } from 'rxjs';
import { SecurityTknService } from './security-tkn.service';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  user: User;

  private authToken: string;

  islogged = false;

  constructor(
    private security: SecurityTknService
  ) {}

  createSession(authToken: string, user: User) {
    console.log('create session with jwt: ' + authToken);
    localStorage.setItem('id_token', authToken);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = authToken;
    this.user = user;
    this.islogged = true;
    console.log(' session has been created with auth :' + this.authToken);
  }

  /** explicitely called upon logout action, otherwise tokens are persisted and local info are NOT deleted */
  destroySession(): void {
    this.authToken = null;
    this.user = null;
    this.islogged = false;
    localStorage.clear();
  }

  /** this method should be used upon instantiation of application */
  loadToken(): boolean {
    const token = localStorage.getItem('id_token');
    if (token != null) {
      this.authToken = token;
      this.islogged = true;
      this.user = JSON.parse(localStorage.getItem('user'));
      return true;
    } else {
      return false;
    }
  }
}
