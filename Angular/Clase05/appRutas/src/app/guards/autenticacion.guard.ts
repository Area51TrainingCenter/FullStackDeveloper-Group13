import { CanActivate, CanActivateChild } from "@angular/router"
import { Injectable } from "@angular/core";
import { AuthService } from '../servicios/auth.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: "root"
})
export class AutenticacionGuard implements CanActivate, CanActivateChild {

	constructor(private auth: AuthService) { }

	canActivate(): Observable<boolean> | Promise<boolean> | boolean {
		//return this.auth.obtenerEstado()
		//return this.auth.obtenerEstadoPromesa()
		return this.auth.obtenerEstadoObservable()
	}

	canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
		//return this.auth.obtenerEstado()
		//return this.auth.obtenerRolPromesa("admin")
		return this.auth.obtenerRolObservable("admin")
	}
}