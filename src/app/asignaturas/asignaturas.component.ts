import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../asignatura'
//import { ASIGNATURAS } from '../temp-asignaturas';
import { AsignaturaService } from '../asignatura.service';
import { MensajeService } from '../mensajes.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})

export class AsignaturasComponent implements OnInit {

  //asignaturas = ASIGNATURAS;
  asignaturas: Asignatura[];

  selectedAsignatura: Asignatura;
 
  constructor(private asignaturaService: AsignaturaService, private mensajeService: MensajeService) { }

  ngOnInit(): void {
    this.getAsignaturas();
  }

  onSelect(asignatura: Asignatura): void{
    this.selectedAsignatura = asignatura;
    this.mensajeService.add(`AsignaturasComponent: Selected asignatura id=${asignatura.id}`);
  }

  getAsignaturas(): void {
    this.asignaturaService.getAsignaturas()
      .subscribe(asignaturas => this.asignaturas = asignaturas);
  }
}
