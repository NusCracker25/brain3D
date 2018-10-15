import { Injectable } from '@angular/core';
import { User } from '../definition/user';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  user: User;

  authToken: string;

  islogged = false;

  constructor() {}

  createSession(authToken: string, user: User) {
    console.log('create session with jwt:' + authToken);
    localStorage.setItem('id_token', authToken);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = authToken;
    this.user = user;
    this.islogged = true;
  }

  /** explicitely called upon logout action, otherwise tokens are persisted and local info are NOT deleted */
  destroySession(): void {
    this.authToken = null;
    this.user = null;
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
