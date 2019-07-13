import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';

import { Routes, RouterModule } from "@angular/router";
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { HomeComponent } from './home/home.component';
import { ContenedorComponent } from './contenedor/contenedor.component'
import { AutenticacionGuard } from './guards/autenticacion.guard';
import { AutorizacionGuard } from './guards/autorizacion.guard';

const rutas: Routes = [
	{ path: "", component: HomeComponent },
	{
		path: "curso", canActivateChild: [AutenticacionGuard], component: ContenedorComponent, children: [
			{ path: "listado", component: ListadoComponent },
			{ path: "nuevo", component: NuevoComponent, canActivate: [AutorizacionGuard] },
			{ path: "edicion/:id", component: EdicionComponent, canActivate: [AutorizacionGuard] }
		]
	},
	//{ path: "**", component: NoEncontradoComponent }
	{ path: "**", redirectTo: "" }
]

@NgModule({
	declarations: [
		AppComponent,
		ListadoComponent,
		EdicionComponent,
		NoEncontradoComponent,
		NuevoComponent,
		HomeComponent,
		ContenedorComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
