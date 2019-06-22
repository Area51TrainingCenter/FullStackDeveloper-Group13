import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { NovelaService } from './servicios/novela.service';

@NgModule({
	declarations: [
		AppComponent,
		ListadoComponent,
		NuevoComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [
		NovelaService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
