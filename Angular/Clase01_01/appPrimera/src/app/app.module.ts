import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimeroComponent } from './primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceroComponent } from './tercero/tercero.component';

@NgModule({
	declarations: [
		AppComponent,
		PrimeroComponent,
		SegundoComponent,
		TerceroComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
