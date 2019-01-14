import { Injectable } from '@angular/core';

import {MapConcept} from '../definition/map-concept';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapHttpService {

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  getMaps(): Observable<MapConcept[]> {
    const url = 'http://localhost:3000/maps';
    return this.http.get<MapConcept[]>(url)
      .pipe(
        map(
          (jsonArray: Object[]) => jsonArray.map(jsonItem => MapConcept.fromJSON(jsonItem))
        ),
        catchError((e: HttpErrorResponse) => this.handleError(e))
      );
  }

  getMap(id: string): Observable<MapConcept> {
    const url = 'http://localhost:3000/maps?id=' + id;
    return this.http.get<MapConcept>(url)
      .pipe(
        map(
          (json: Object) => MapConcept.fromJSON(json)
        ),
        catchError((e: HttpErrorResponse) => this.handleError(e))
      );

  }

  putMap(mapC: MapConcept): Observable<MapConcept> {
    const url = 'http://localhost:3000/maps';
    // assume user can be added, more test to be done on email address and so...
    // const body = JSON.stringify(user) + '"password":' + password;
    const body = JSON.stringify(mapC);
    // return this.http.post<User>(url,body);
    return this.http.post<MapConcept>(url, body, this.httpOptions)
    .pipe(
      map(
        (json: Object) => MapConcept.fromJSON(json)
      ),
      catchError((e: HttpErrorResponse) => this.handleError(e))
    );
  }

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
      `Something bad happened; please try again later. ${error.error}`);
  }
}
