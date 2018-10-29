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
export class AuthenticationService {

  constructor(
    private user_serv: UserHttpService,
    private session: SessionManagerService,
  ) { }


  loginUser (user: User , password: string): Observable<User>{
    console.log('user is being logged '  + user.username);
    return this.user_serv.signIn(user, password)
    .pipe(
      map( (response) => {
        console.log('received token: ' + response.token);
        this.session.createSession(response.token, user);
        return user;
      })
    );
  }

  logout(): void {
    this.session.destroySession();
  }


  registerUser(username, password): Observable<User> {
    const user = this.user_serv.putUser({ username: username, password: password });
    return user;
  }
}
