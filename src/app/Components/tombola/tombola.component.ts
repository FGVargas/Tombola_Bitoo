import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from "../../Services/service.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-tombola',
  templateUrl: './tombola.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./tombola.component.css']
})
export class TombolaComponent implements OnInit {
  id:any;
  listaTodos:Array<any>=[];
  listaArticulos:Array<any>=[];
  listanueva:Object=[];
   // @ts-ignore
  participante:FormGroup<any>;
  constructor(private route:ActivatedRoute,private servicio:ServiceService, private tombola:NgbModal,private formBuilder:FormBuilder) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any)=>{const {params} = paramMap;
      this.id = params.id;
    })

    this.timer();
    // @ts-ignore
    this.participante=this.formBuilder.group(
      {'nombre':'','correo':'','telefono':'','cargo':''}
    );
  }

  obtener(){
    this.servicio.listaPersonas().subscribe(result=>{this.listaTodos=result;},
      error=>{console.log(error)});
  }
  obtenerArticulos(){
    this.servicio.listaArticulos().subscribe(result=>{this.listaArticulos=result.data.articulo;},
      error=>{console.log(error)});
  }

  nuevo(){
    this.servicio.createsuario(this.participante.value).subscribe(result=>{console.log(result);},
      error=>{console.log(error)});
  }
  timer(){
// Refresh every second
      setInterval(this.updateCountdown,100);
}
  updateCountdown(){
    const fechainicio = new Date('10/06/2022 11:03 PM');
    const SPAN_DAYS = document.getElementById('dias');
    const SPAN_HOURS = document.getElementById('horas');
    const SPAN_MINUTES = document.getElementById('minutos');
    const SPAN_SECONDS = document.getElementById('segundos');
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24
    const hoy = new Date()
    // @ts-ignore
    const DURATION = fechainicio - hoy;
    const dias = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const horas = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const minutos = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const segundos = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

    // @ts-ignore
    SPAN_DAYS.innerText = String(dias);
    // @ts-ignore
    SPAN_HOURS.innerText = String(horas);
    // @ts-ignore
    SPAN_MINUTES.innerText =  minutos;
    // @ts-ignore
    SPAN_SECONDS.innerText = segundos;
  }
  openSM(contenido: any){
    this.tombola.open(contenido,{size:'sm'});
  }

}
