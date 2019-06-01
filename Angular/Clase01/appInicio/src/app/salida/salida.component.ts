import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-salida',
	templateUrl: './salida.component.html',
	styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

	nombre: string

	constructor() { }

	captura(evento) {
		console.log("Evento input disparado")
		console.log(evento)
		this.nombre = evento
	}

	ngOnInit() {
	}

}
