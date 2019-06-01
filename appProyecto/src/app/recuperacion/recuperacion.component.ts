import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-recuperacion',
	templateUrl: './recuperacion.component.html',
	styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent implements OnInit {
	datos: any = {}

	constructor() { }

	ngOnInit() {
	}

	correo(dato: string) {
		this.datos.correo = dato.trim()
	}

	recuperar() {
		if (this.datos.correo && this.datos.correo !== "") {
			alert("Recuperacion ok")
		} else {
			alert("Recuperacion error")
		}
	}

}
