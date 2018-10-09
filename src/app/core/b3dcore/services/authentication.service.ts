import { Injectable } from '@angular/core';
import { User } from '@b3d/core/b3dcore/definition/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogged = false;
  user: User;

  constructor() { }


  loginUser (user: User): boolean {
    console.log('user is logged '  + user.username);
    this.isLogged = true;
    this.user = user;
    return true;
  }

  logout(): boolean {
    console.log('user is logged out ' + this.user.username);
    this.isLogged = false;
    return true;
  }
}
