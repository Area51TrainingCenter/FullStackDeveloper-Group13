import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { InsercionComponent } from './insercion/insercion.component';
import { ReportesComponent } from './reportes/reportes.component';

@NgModule({
  declarations: [ListadoComponent, EdicionComponent, InsercionComponent, ReportesComponent],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
