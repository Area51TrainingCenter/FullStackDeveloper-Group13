import { Component, OnInit } from '@angular/core';
import { Inovela } from '../modelos/inovela';
import { NovelaService } from '../servicios/novela.service';

@Component({
	selector: 'app-nuevo',
	templateUrl: './nuevo.component.html',
	styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
	/* titulo: string
	descripcion: string
	autor: string
	anno: number */
	novela: Inovela = {}

	//servicio: NovelaService

	constructor(private servicio: NovelaService) {
		//this.servicio = ns
	}

	ngOnInit() {
	}

	grabar() {
		this.servicio.insertar(this.novela)
		this.novela = {}
		//console.log(this.novela)
	}

}
