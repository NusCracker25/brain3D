import { Injectable } from '@angular/core';
import {
  Observable,
  throwError,
  pipe
} from 'rxjs';
import {
  catchError,
  retry,
  map
} from 'rxjs/operators';

import { User } from '@core/definition/user';
import { SessionManagerService } from './session-manager.service';
import { UserHttpService } from './user-http.service';

@Injectable({
  providedIn: 'root'
})

/**
 * focuses on application authentication and user validation, hence session creation on client side
 */
export class AuthenticationService {

  constructor(
    private userHttp: UserHttpService,
    private session: SessionManagerService,
  ) { }


  loginUser (user: User , password: string): Observable<User>{
    console.log('AS: user is being logged '  + user.username);
    return this.userHttp.logIn(user, password)
      .pipe(
        map( (response) => {
          console.log('received token: ' + response.token);
          console.log('user is ' + JSON.stringify(user));
          this.session.createSession(response.token, user);
          return user;
        })
      );
  }

  logout(): void {
    this.session.destroySession();
  }


  registerUser(user: User, password: string): Observable<User> {
    console.log('AS: user is being registered '  + user.username);
    return this.userHttp.putUser(user, password)
      .pipe(
        map( (response) => {
          console.log('received token: ' + JSON.stringify(response));
          console.log('user is ' + JSON.stringify(user));
          //this.session.createSession(response.token, user);
          return user;
        })
      );

    // const user = this.userHttp.putUser({ username: username, password: password });
    // return user;
  }
}
