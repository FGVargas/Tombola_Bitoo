import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from "../../Services/service.service";
import {hide} from "@popperjs/core";
@Component({
  selector: 'app-intercambio',
  templateUrl: './intercambio.component.html',
  styleUrls: ['./intercambio.component.css']
})
export class IntercambioComponent implements OnInit {
  cantidadEsferas:number=0;
  listaTodos:Array<any>=[];
  constructor(private route:ActivatedRoute,private servicio:ServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any)=>{const {params} = paramMap;
  })
    this.esferas();
    this.obtener();
  }

  obtener(){
    this.servicio.lista().subscribe(result=>{this.listaTodos=result.data.empleado;},
      error=>{console.log(error)});
  }
  esferas(){


  }

}
