import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';
import {RouterOutlet} from "@angular/router";
import { TombolaComponent } from './Components/tombola/tombola.component';
import {HttpClientModule} from "@angular/common/http";
<<<<<<< HEAD
=======
import { IntercambioComponent } from './Components/intercambio/intercambio.component';
import { ModalComponent } from './Components/modal/modal.component';
>>>>>>> fc1a256 (ADD-FILES/intercambio)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TombolaComponent,
    IntercambioComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
