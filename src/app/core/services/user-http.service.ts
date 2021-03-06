import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { User } from '../definition/user';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  };

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    ) { }

  getUsers(): Observable<User[]> {
    const url = 'http://localhost:3000/users';
    return this.http.get<User[]>(url)
      .pipe(
        map(
          (jsonArray: Object[]) => jsonArray.map(jsonItem => User.fromJSON(jsonItem))
        ),
        catchError((e: HttpErrorResponse) => this.handleError(e))
      );

  }

  getUser(id: string): Observable<User> {
    const url = 'http://localhost:3000/users?id=' + id;
    return this.http.get<User>(url)
      .pipe(
        map(
          (json: Object) => User.fromJSON(json)
        ),
        catchError((e: HttpErrorResponse) => this.handleError(e))
      );

  }

  putUser(user: User , password: string): Observable<User> {
    const url = 'http://localhost:3000/users';
    // assume user can be added, more test to be done on email address and so...
    // const body = JSON.stringify(user) + '"password":' + password;
    const body = JSON.stringify(user);
    // return this.http.post<User>(url,body);
    return this.http.post<User>(url, body, this.httpOptions)
    .pipe(
      map(
        (json: Object) => User.fromJSON(json)
      ),
      catchError((e: HttpErrorResponse) => this.handleError(e))
    );
  }

  public logIn(user: User, password: string): Observable<any> {
   const uname = user.username;
    return this.http.post( 'http://localhost:3000/sign-in', {
      username: uname,
      password: password
    })
    .pipe(
      // map((response: Response) => e.json()),
      catchError((e: HttpErrorResponse) => this.handleError(e))
   );
  }

  // error handling
  private handleError(error: HttpErrorResponse) {
    this.snackBar.open(`we had an issue ! ${error.error}`, null, { duration: 2000 });
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
    return throwError(
      `Something bad happened; please try again later. ${error.error.message}`);
  }
}
