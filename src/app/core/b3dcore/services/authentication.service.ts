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
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';

import { User } from '@b3d/core/b3dcore/definition/user';
import { SessionManagerService } from './session-manager.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogged = false;
  user: User;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

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

  createUser(user: User, password: String): boolean{

    return true;
  }

  registerUser(username, password): Observable<User> {
    let result = null;
    const usert = { username: username, password: password };
    this.putUser(usert);
    result = { success: true, username: username };

  }

  getUsers(): Observable<User[]> {

    const url = 'http://localhost:3000/users';
    return this.http.get<User[]>(url).pipe(
      // map((e:Response)=> e.json()),
      catchError((e:HttpErrorResponse)=> this.handleError(e))
   );

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
      catchError((e:HttpErrorResponse)=> this.handleError(e))
   );
  }


  private handleError(error: HttpErrorResponse) {
    this.snackBar.open('we had an issue !'+error.error.message, null, { duration: 2000 });
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
