import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './nucleo/login/login.component';
import { RecuperarComponent } from './nucleo/recuperar/recuperar.component';
import { ResumenComponent } from './nucleo/resumen/resumen.component';
import { CommonModule } from '@angular/common';
import { NucleoModule } from './nucleo/nucleo.module';
import { UsuariosModule } from './usuarios/usuarios.module';

const rutas: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'recuperar', component: RecuperarComponent },
	{ path: 'resumen', component: ResumenComponent },
	{ path: "usuarios", loadChildren: () => import("./usuarios/usuarios.module").then(mod => mod.UsuariosModule) }
]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(rutas)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }