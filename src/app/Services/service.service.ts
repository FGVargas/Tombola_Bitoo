import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlBase = 'http://localhost/capacitaciones/phpcap_ago22/back/rutas.php?peticion=empleado&funcion=listado';

  constructor(private http:HttpClient) { }

  lista():Observable<any>{

    return this.http.get(this.urlBase).pipe(map(respuestaa=>{return respuestaa;}));
  }
}
