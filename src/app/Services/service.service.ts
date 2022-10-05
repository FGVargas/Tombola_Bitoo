import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlBase = 'https://tombolasoftura1.000webhostapp.com';
  constructor(private http:HttpClient) { }

  listaPersonas():Observable<any>{

    return this.http.get(this.urlBase+'/back/rutas.php?peticion=usuario&funcion=listado').pipe(map(respuestaa=>{return respuestaa;}));
  }
  listaArticulos():Observable<any>{
    return this.http.get(this.urlBase+'/back/rutas.php?peticion=articulo&funcion=listado').pipe(map(respuestaa=>{return respuestaa;}));
  }
  guardar( usuario:any):Observable<any> {
    const body = JSON.stringify({usuario});
    return this.http.post(this.urlBase + '/back/rutas.php?peticion=usuario&funcion=nuevo',body).pipe(map(respuestaa=>{return respuestaa;}));
  }
}
