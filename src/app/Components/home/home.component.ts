import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ServiceService} from "../../Services/service.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaEmpleado:Array <any>=[];
  // @ts-ignore
  articulo:FormGroup<any>;
  constructor(private servicio:ServiceService, private home:NgbModal) { }

  ngOnInit(): void {
    this.obtener();
    // @ts-ignore
    this.articulo=this.formBuilder.group(
      {'nombre':'','cantidad':'','probabilidad':'8'}
    );
  }

  obtener(){
    this.servicio.listaPersonas().subscribe(result=>{this.listaEmpleado=result.data.usuario;},
      error=>{console.log(error)});
  }
 agregar(){/*
   this.servicio.createsuario(this.articulo.value).subscribe(result=>{console.log(result);},
     error=>{console.log(error)});
   alert("Registro Exitoso");
   this.obtenerUltimo();*/
 }
  openSM(agregarArticulos: any){
    this.home.open(agregarArticulos,{size:'sm'});
  }
}
