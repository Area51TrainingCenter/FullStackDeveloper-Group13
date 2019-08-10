import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialesRoutingModule } from './editoriales-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { InsercionComponent } from './insercion/insercion.component';

@NgModule({
  declarations: [ListadoComponent, EdicionComponent, InsercionComponent],
  imports: [
    CommonModule,
    EditorialesRoutingModule
  ]
})
export class EditorialesModule { }
