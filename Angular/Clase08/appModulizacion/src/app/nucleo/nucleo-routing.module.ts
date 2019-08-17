import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResumenComponent } from './resumen/resumen.component';
import { RecuperarComponent } from './recuperar/recuperar.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'recuperar', component: RecuperarComponent },
	{ path: 'resumen', component: ResumenComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NucleoRoutingModule { }
