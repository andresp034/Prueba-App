import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { AsignaturasDetailComponent } from './asignaturas-detail/asignaturas-detail.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    AsignaturasComponent,
    AsignaturasDetailComponent,
    MensajesComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
