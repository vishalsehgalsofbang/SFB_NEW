import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HomepageService {


  endpoint = 'https://SofbangUccIcs-sofbangucc.uscom-central-1.oraclecloud.com:443/ic/api/integration/v1/flows/rest/USER_DETAILS/1.0/details';
  httpOptions = {
  headers: new HttpHeaders({
     
   
    'Authorization' : 'Basic cmFodWwuZ29naWFAc29mYmFuZy5jb206TWFyczEyNDg='
     })
  };

  constructor(private http: HttpClient) { }

  public extractData(res: Response) {
    let body = res;
    return body || {
      
     };
  }

  getHomePageDetails(){
    return this.http.get<any>(this.endpoint , this.httpOptions).pipe(
      map(this.extractData)
      );
  }
}
