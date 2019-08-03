import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class UsuariosService {

	constructor(private http: HttpClient) { }

	listar(): Observable<any[]> {
		return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
	}
}
