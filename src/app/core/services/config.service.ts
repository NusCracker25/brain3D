import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Config } from '@core/definition/config';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  configUrl = 'assets/config.json';
  /**
   * authentication token for the app
   */
  authToken: string;

  constructor(
    private http: HttpClient
  ) { }

  initialize() {
    console.log('initialize app');
    this.connectBackEnd().subscribe();
  }

  private connectBackEnd(): Observable<any> {
    return this.http.post<any>( 'http://localhost:3000/' + 'auth', {
      appid: 'mm3d',
      appkey: '123456'
    })
    .pipe(
      map( response => {
        console.log('received token: ' + response);
        if ( response && response.token) {
        this.authToken = response.token;
        }
        return this.authToken;
      }),
      catchError((e: HttpErrorResponse) => this.handleError(e))
   );
  }


  getConfig() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        retry(3), // in case of failed request retry 3 times max
        catchError(this.handleError) // then handle the error if any
      );
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
  }

  private handleError(error: HttpErrorResponse) {
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
      'Something bad happened; please try again later.');
  }
}
