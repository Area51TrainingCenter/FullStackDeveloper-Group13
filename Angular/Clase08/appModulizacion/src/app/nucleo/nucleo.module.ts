import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { ResumenComponent } from './resumen/resumen.component';

@NgModule({
	declarations: [MenuComponent, CabeceraComponent, LoginComponent, RecuperarComponent, ResumenComponent],
	imports: [
		CommonModule,
		NucleoRoutingModule
	],
	exports: [
		CabeceraComponent
	]
})
export class NucleoModule { }
