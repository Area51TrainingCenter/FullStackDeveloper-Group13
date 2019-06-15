import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	nombre: string = "Curso FullStack"

	usuarios = [
		{ username: "usuario01", name: "nombre01", email: "correo1@abc.com" },
		{ username: "usuario02", name: "nombre02", email: "correo2@abc.com" },
		{ username: "usuario03", name: "nombre03", email: "correo3@abc.com" },
		{ username: "usuario04", name: "nombre04", email: "correo4@abc.com" }
	]

	desactivado: boolean = false

	ngOnInit() {
	}

	agregarUsuario() {
		this.usuarios.push({ username: "usuario05", name: "nombre05", email: "correox@abc.com" })
	}

	eliminarUsuario(indice: number) {
		this.usuarios.splice(indice, 1)
	}
}
