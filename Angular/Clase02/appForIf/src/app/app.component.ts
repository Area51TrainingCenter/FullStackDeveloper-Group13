import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	usuarios = [
		{ username: "usuario01", name: "nombre01" },
		{ username: "usuario02", name: "nombre02" },
		{ username: "usuario03", name: "nombre03" },
		{ username: "usuario04", name: "nombre04" }
	]

	desactivado: boolean = false

	ngOnInit() {
	}

	agregarUsuario() {
		this.usuarios.push({ username: "usuario05", name: "nombre05" })
	}
}
