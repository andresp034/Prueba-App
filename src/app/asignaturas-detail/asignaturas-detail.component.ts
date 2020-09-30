import { Component, OnInit, Input } from '@angular/core';
import { Asignatura } from '../asignatura';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AsignaturaService } from '../asignatura.service';

@Component({
  selector: 'app-asignaturas-detail',
  templateUrl: './asignaturas-detail.component.html',
  styleUrls: ['./asignaturas-detail.component.css']
})
export class AsignaturasDetailComponent implements OnInit {


  asignatura: Asignatura;

  constructor(
    private route: ActivatedRoute,
    private asignaturaService: AsignaturaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAsignatura();
  }

  getAsignatura(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.asignaturaService.getAsignatura(id)
      .subscribe(asignatura => this.asignatura = asignatura);
  }

  goBack(): void {
    this.location.back();
  }

}
