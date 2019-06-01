import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	datos: any = {}

	constructor() { }

	ngOnInit() {
	}

	correo(dato: string) {
		this.datos.correo = dato.trim()
	}

	contrasena(dato: string) {
		this.datos.contrasena = dato.trim()
	}

	login() {
		if (this.datos.correo && this.datos.contrasena && this.datos.correo !== "" && this.datos.contrasena !== "") {
			alert("Login ok")
		} else {
			alert("Login error")
		}
	}

}
