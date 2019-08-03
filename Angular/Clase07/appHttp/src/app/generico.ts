import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Generico {
	http: HttpClient
	rutaAPI: string

	constructor(http: HttpClient, rutaAPI: string) {
		this.http = http
		this.rutaAPI = rutaAPI
	}

	listar() {
		return this.http.get(this.rutaAPI)
	}

	insertar(data) {
		return this.http.post(this.rutaAPI, data)
	}

	actualizar(data) {
		return this.http.put(`${this.rutaAPI}/${data._id}`, data)
	}

	eliminar(_id) {
		return this.http.delete(`${this.rutaAPI}/${_id}`)
	}
}