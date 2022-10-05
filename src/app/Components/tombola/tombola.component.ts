import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from "../../Services/service.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-tombola',
  templateUrl: './tombola.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./tombola.component.css']
})
export class TombolaComponent implements OnInit {
  id:any;
  totalUsuario:any;
  listaTodos:Array<any>=[];
  listaArticulos:Array<any>=[];
  listanueva:Object=[];
   // @ts-ignore

   createFormGroup(){
    return new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      cargo:new FormControl('',[Validators.required])
    });
  }
  participanteForm:FormGroup;
  constructor(private route:ActivatedRoute,private servicio:ServiceService, private tombola:NgbModal,private formBuilder:FormBuilder) {
    this.participanteForm= this.createFormGroup();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any)=>{const {params} = paramMap;
      this.id = params.id;
    })

    this.timer();
    this.obtenerUltimo();
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
  obtenerUltimo(){
    this.servicio.ultimo().subscribe(result=>{this.totalUsuario=result.data.usuario;},
      error=>{console.log(error)});
  }

  nuevo(){
    if(this.participanteForm.valid){
      this.servicio.createsuario(this.participanteForm.value).subscribe(result=>{console.log(result);},
      error=>{console.log(error)});
      this.obtenerUltimo();
      this.tombola.dismissAll();
      alert("Registro Exitoso");
    }else{
      alert("Campos Vacios");
    }
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
