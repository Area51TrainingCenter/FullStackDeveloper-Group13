import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AutorizacionGuard implements CanActivate {
	constructor(private auth: AuthService) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		//return this.auth.obtenerRol() == "admin";
		//return this.auth.obtenerRolPromesa("admin")
		return this.auth.obtenerRolObservable("admin")

		/* 	return new Promise(...)
			return Observable.create(...) */
	}

}
