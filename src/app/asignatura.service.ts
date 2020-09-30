import { Injectable } from '@angular/core';
import { Asignatura } from './asignatura';
import { ASIGNATURAS } from './temp-asignaturas';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensajes.service';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private mensajeService: MensajeService) { }

  getAsignaturas(): Observable<Asignatura[]> {
    
    this.mensajeService.add('AsignaturaService: fetched asignaturas');
    return of(ASIGNATURAS);
  }

  getAsignatura(id: number): Observable<Asignatura> {
    this.mensajeService.add('AsignaturaService: fetched asignatura id={id}');
    return of(ASIGNATURAS.find(asignaturas => asignaturas.id === id));
  }
}
