import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AlumnoService {

	constructor(private readonly http: HttpClient) {
		/* 		readonly es para evitar que alguien haga lo siguiente
				this.http = null y se pierda la inyeccion */
	}

	listar(): Observable<any> {
		/* 		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
		
				const headers = new HttpHeaders()
				headers.append("Authorization", `Bearer ${token}`) */

		/* 		return this.http.get("http://clase.tibajodemanda.com/alumno", { headers: headers }) */

		return this.http.get("http://clase.tibajodemanda.com/alumno")
	}
}
