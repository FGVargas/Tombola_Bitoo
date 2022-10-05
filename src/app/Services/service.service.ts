import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlBase = 'https://tombolasoftura1.000webhostapp.com';
  constructor(private http:HttpClient,private _http:HttpClient) { }

  listaPersonas():Observable<any>{

    return this.http.get(this.urlBase+'/back/rutas.php?peticion=usuario&funcion=listado').pipe(map(respuestaa=>{return respuestaa;}));
  }
  listaArticulos():Observable<any>{
    return this.http.get(this.urlBase+'/back/rutas.php?peticion=articulo&funcion=listado').pipe(map(respuestaa=>{return respuestaa;}));
  }
  ultimo():Observable<any>{
    return this.http.get(this.urlBase+'/back/rutas.php?peticion=usuario&funcion=conteo').pipe(map(respuesta2=>{return respuesta2;}));
  }
  createsuario(usuario:any):Observable<any>{

    var request="/back/rutas.php?peticion=usuario&funcion=nuevo";
    var url=this.urlBase+request;
    let datas = new FormData();
    datas.append('nombre',usuario.nombre);
    datas.append('correo',usuario.correo);
    datas.append('telefono',usuario.telefono);
    datas.append('cargo',usuario.cargo);
    return this._http.post(url,datas).pipe(map(respuestaa=>{return respuestaa;}));

  }
  createArticulo(Articulo:any):Observable<any>{

    var request="/back/rutas.php?peticion=articulo&funcion=nuevo";
    var url=this.urlBase+request;
    let datas = new FormData();
    datas.append('nombre',Articulo.nombre);
    datas.append('cantidad',Articulo.cantidad);
    datas.append('probabilidad',Articulo.probabilidad);
    return this._http.post(url,datas).pipe(map(respuestaa=>{return respuestaa;}));

  }
}
