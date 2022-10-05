import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ServiceService} from "../../Services/service.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaEmpleado:Array <any>=[];
  constructor(private servicio:ServiceService, private home:NgbModal) { }

  ngOnInit(): void {
    this.obtener();
  }

  obtener(){
    this.servicio.listaPersonas().subscribe(result=>{this.listaEmpleado=result.data.usuario;},
      error=>{console.log(error)});
  }

  openSM(agregarArticulos: any){
    this.home.open(agregarArticulos,{size:'sm'});
  }
}
