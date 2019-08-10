import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NucleoModule } from './nucleo/nucleo.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NucleoModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
