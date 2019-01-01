import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
                              'Authorization': 'Basic aHI6aHI=',
                             'Access-Control-Allow-Origin':'*',
                             'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                             'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token'})
};

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  endpoint = 'http://localhost:3003/';

  constructor(private http:HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getyearlyactivemanagers(): Observable<any>{
    
    return this.http.get( this.endpoint + 'barChartdata').pipe(map(this.extractData));

   };

  getRootResponse():Observable<any>{
    return this.http.get(this.endpoint + '').pipe(map(this.extractData));
  }
  


}
 