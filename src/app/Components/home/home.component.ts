import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../Services/service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaEmpleado:Array <any>=[];
  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
    this.obtener();
  }

  obtener(){
    this.servicio.listaPersonas().subscribe(result=>{this.listaEmpleado=result.data.usuario;},
      error=>{console.log(error)});
  }
}
