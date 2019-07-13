import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private estado: boolean = false
	private rol: string = ""

	constructor() { }

	login(rol) {
		this.estado = true
		this.rol = rol
	}

	logout() {
		this.estado = false
		this.rol = ""
	}

	obtenerEstado(): boolean {
		return this.estado
	}

	obtenerRol(): string {
		return this.rol
	}

	obtenerEstadoPromesa(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.estado)
			}, 1500)
		})
	}

	obtenerRolPromesa(rol: string): Promise<boolean> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.rol == rol)
			}, 1500)
		})
	}

	obtenerEstadoObservable(): Observable<boolean> {
		return Observable.create(
			(observador: Observer<boolean>) => {
				setTimeout(() => {
					observador.next(this.estado)
				}, 1500)
			}
		)
	}

	obtenerRolObservable(rol: string): Observable<boolean> {
		return Observable.create(
			(observador: Observer<boolean>) => {
				setTimeout(() => {
					observador.next(this.rol == rol)
				}, 1500)
			}
		)
	}
}
