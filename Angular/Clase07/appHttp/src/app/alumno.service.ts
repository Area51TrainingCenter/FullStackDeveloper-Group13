import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AlumnoService {

	constructor(private http: HttpClient) { }

	listar() {
		return this.http.get("http://clase.tibajodemanda.com/alumno")
		/* 		this.http.get("http://clase.tibajodemanda.com/alumno").subscribe(
					data => console.log(data)
				) */
	}
}
