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
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private session: SessionManagerService,
    private snackBar: MatSnackBar
  ) { }


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


  registerUser(username, password): Observable<User> {
    let result = null;
    const usert = { username: username, password: password };
    this.putUser(usert);
    result = { success: true, username: username };

  }



  putUser(user): Observable <any> {
    const url = 'http://localhost:3000/users';
    // assume user can be added, more test to be done on email address and so...
    console.log('request for all users');
    const body = JSON.stringify(user);
    // return this.http.post<User>(url,body);
    return this.http.post<User>(url, body, this.httpOptions)
    .pipe(
      // map((e:Response)=> e.json()),
      catchError((e:HttpErrorResponse)=> this.handleError(e))
   );
  }

  public signIn(username: string, password: string): Observable<any>{
    return this.http.post( 'http://localhost:3000/sign-in',{
      username,
      password
    })
    .pipe(
      // map((e:Response)=> e.json()),
      catchError((e: HttpErrorResponse) => this.handleError(e))
   );
  }



}
