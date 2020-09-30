import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsignaturasDetailComponent } from './asignaturas-detail/asignaturas-detail.component';

const routes: Routes = [

  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: AsignaturasDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
