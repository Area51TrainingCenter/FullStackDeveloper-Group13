import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Generico } from './generico';
import { pluck } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AlumnoService extends Generico {

	constructor(http: HttpClient) {
		super(http, "http://clase.tibajodemanda.com/alumno")
	}

	listar() {
		return this.http.get(this.rutaAPI).pipe(pluck("results"))
	}

	listarPaginado() { }


	//listar() {
	//return this.http.get("http://clase.tibajodemanda.com/alumno")
	/* 		this.http.get("http://clase.tibajodemanda.com/alumno").subscribe(
				data => console.log(data)
			) */
	//}

	/* insertar(data) {
		return this.http.post("http://clase.tibajodemanda.com/alumno", data)
	}

	actualizar(data) {
		return this.http.put(`http://clase.tibajodemanda.com/alumno/${data._id}`, data)
	}

	eliminar(_id) {
		return this.http.delete(`http://clase.tibajodemanda.com/alumno/${_id}`)
	} */
}
