import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { InsercionComponent } from './insercion/insercion.component';

const routes: Routes = [
	{ path: "", component: ListadoComponent },
	{ path: "edicion", component: EdicionComponent },
	{ path: "insercion", component: InsercionComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsuariosRoutingModule { }
