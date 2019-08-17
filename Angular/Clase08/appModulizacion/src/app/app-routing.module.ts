import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { LoginComponent } from './nucleo/login/login.component';
import { RecuperarComponent } from './nucleo/recuperar/recuperar.component';
import { ResumenComponent } from './nucleo/resumen/resumen.component';
import { CommonModule } from '@angular/common';
import { NucleoModule } from './nucleo/nucleo.module';
import { UsuariosModule } from './usuarios/usuarios.module';

const rutas: Routes = [
	{ path: "usuarios", loadChildren: () => import("./usuarios/usuarios.module").then(mod => mod.UsuariosModule) },
	{ path: "libros", loadChildren: () => import("./libros/libros.module").then(mod => mod.LibrosModule) }

	/* 	{ path: "usuarios", loadChildren: "./usuarios/usuarios.module#UsuariosModule" } */
]

// Precarga diferida: https://stackblitz.com/edit/angular-estrategia-precarga-diferida

// Precarga basada en rol: https://stackblitz.com/edit/angular-precarga-personalizada

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(rutas, { preloadingStrategy: PreloadAllModules })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }