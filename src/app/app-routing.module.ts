import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {TombolaComponent} from "./Components/tombola/tombola.component";
import { RegistroComponent } from './Components/registro/registro.component';


const routes: Routes = [
  {'path':'Home',component:HomeComponent},
  {'path':'Tombola',component:TombolaComponent},
  {'path':'Registro',component:RegistroComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
