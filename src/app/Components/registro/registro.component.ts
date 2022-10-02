import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private registro:NgbModal) { }

  ngOnInit(): void {
  }
  openSM(contenido: any){
    this.registro.open(contenido,{size:'sm'});
  }
  openLG(contenido: any){
    this.registro.open(contenido,{size:'lg'});
  }
  openXL(contenido: any){
    this.registro.open(contenido,{size:'xl'});
  }
  openCentrado(contenido: any){
    this.registro.open(contenido,{centered:true});
  }
  openScroll(contenido: any){
    this.registro.open(contenido,{scrollable:true});
  }
  openBackground(contenido: any){
    this.registro.open(contenido,{backdropClass:'azul'});
  }
  openWindow(contenido: any){
    this.registro.open(contenido,{windowClass:'oscuro'});
  }

  

}
