import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ServiceService} from "../../Services/service.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaEmpleado:Array <any>=[];
  // @ts-ignore
  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      cantidad: new FormGroup('',[Validators.required])
    });
  }

   articuloForm: FormGroup;
  constructor(private servicio:ServiceService, private home:NgbModal,private formBuilder:FormBuilder) { 
    this.articuloForm = this.createFormGroup();
  }

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
 agregar(){
  if(this.articuloForm.valid){
    this.servicio.createArticulo(this.articuloForm.value).subscribe(result=>{console.log(result);},
      error=>{console.log(error)});
    alert("Se creo Articulo Exitoso");
 
    this.home.dismissAll();
   }
   alert("Campos Vacios");
 }
  openSM(agregarArticulos: any){
    this.home.open(agregarArticulos,{size:'sm'});
  }
}
