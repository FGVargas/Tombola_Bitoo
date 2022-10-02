import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {TombolaComponent} from "./Components/tombola/tombola.component";


const routes: Routes = [
  {'path':'Home',component:HomeComponent},
  {'path':'Tombola',component:TombolaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
