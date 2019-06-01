import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
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

	confirmacion(dato: string) {
		this.datos.confirmacion = dato.trim()
	}

	nombre(dato: string) {
		this.datos.nombre = dato.trim()
	}

	registro() {
		if (this.datos.correo && this.datos.contrasena && this.datos.correo !== "" && this.datos.contrasena !== "" && this.datos.confirmacion && this.datos.confirmacion !== "" && this.datos.nombre && this.datos.nombre !== "") {
			alert("Registro ok")
		} else {
			alert("Registro error")
		}
	}

}
