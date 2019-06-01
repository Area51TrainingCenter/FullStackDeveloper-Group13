import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MioComponent } from "./mio.component";
import { AlertaComponent } from './alerta/alerta.component';
import { SalidaComponent } from './salida/salida.component'

@NgModule({
	declarations: [
		AppComponent,
		MioComponent,
		AlertaComponent,
		SalidaComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
