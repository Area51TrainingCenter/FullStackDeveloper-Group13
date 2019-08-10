import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { InsercionComponent } from './insercion/insercion.component';

@NgModule({
	declarations: [ListadoComponent, EdicionComponent, InsercionComponent],
	imports: [
		CommonModule,
		UsuariosRoutingModule
	],
	exports: []
})
export class UsuariosModule { }
