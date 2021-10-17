import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalificacionListarComponent} from './calificacion-listar/calificacion-listar.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CalificacionListarComponent],
  declarations: [CalificacionListarComponent]
})
export class CalificacionModule { }
