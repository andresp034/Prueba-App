import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../asignatura';
import { AsignaturaService } from '../asignatura.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  asignaturas: Asignatura[] = [];

  constructor(private asignaturaService: AsignaturaService) { }

  ngOnInit(): void {
    this.getAsignaturas();
  }

  getAsignaturas(): void {
    this.asignaturaService.getAsignaturas()
      .subscribe(asignaturas => this.asignaturas = asignaturas.slice(1, 5));
  }

}
