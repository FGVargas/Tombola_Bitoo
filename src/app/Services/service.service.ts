import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlBase = 'https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient) { }

  lista():Observable<any>{

    return this.http.get(this.urlBase+'todos').pipe(map(respuestaa=>{return respuestaa;}));
  }
}
