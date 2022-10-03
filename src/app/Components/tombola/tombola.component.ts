import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from "../../Services/service.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tombola',
  templateUrl: './tombola.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./tombola.component.css']
})
export class TombolaComponent implements OnInit {
  id:any;
  listaTodos:Array<any>=[];
  temporizador:number=0;
  constructor(private route:ActivatedRoute,private servicio:ServiceService, private tombola:NgbModal) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any)=>{const {params} = paramMap;
      this.id = params.id;
    })
    this.obtener();

    this.timer();
  }

  obtener(){
    this.servicio.lista().subscribe(result=>{this.listaTodos=result;},
      error=>{console.log(error)});
  }
  timer(){
// Refresh every second
      setInterval(this.updateCountdown,100);
}
  updateCountdown(){
    const fechainicio = new Date('10/03/2022 11:03 PM');
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
    SPAN_DAYS.textContent = String(dias);
    // @ts-ignore
    SPAN_HOURS.textContent = String(horas);
    // @ts-ignore
    SPAN_MINUTES.textContent =  minutos;
    // @ts-ignore
    SPAN_SECONDS.textContent = segundos;
  }
  openSM(contenido: any){
    this.tombola.open(contenido,{size:'sm'});
  }

}
