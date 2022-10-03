import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {TombolaComponent} from "./Components/tombola/tombola.component";
import {IntercambioComponent} from "./Components/intercambio/intercambio.component";
import {ModalComponent} from "./Components/modal/modal.component";



const routes: Routes = [
  {'path':'Home',component:HomeComponent},
  {'path':'Tombola',component:TombolaComponent},
  {'path':'Intercambio',component:IntercambioComponent},
  {'path':'ModalRegistro',component:ModalComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
