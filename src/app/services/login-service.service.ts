import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  endpoint = 'https://sofbanguccics-sofbangucc.uscom-central-1.oraclecloud.com/ic/api/integration/v1/flows/rest/AUTHORIZATION/2.0/login';
   httpOptions = {
   headers: new HttpHeaders({
      
     'Content-Type':  'application/json',
     'Authorization' : 'Basic cmFodWwuZ29naWFAc29mYmFuZy5jb206TWFyczEyNDg='
      })
   };

  constructor(private http: HttpClient) { }

  public extractData(res: Response) {
    let body = res;
    return body || {
      
     };
  }
  
  getDetails(jsonObj): Observable<any> {
    console.log(jsonObj);
    return this.http.post<any>(this.endpoint ,  jsonObj, this.httpOptions).pipe(
      map(this.extractData)
      );

      console.log(this.extractData);
  }
  

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  
  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);
  
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
  
}
