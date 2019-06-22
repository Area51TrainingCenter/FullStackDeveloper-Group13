import { Component, OnInit } from '@angular/core';
import { Inovela } from '../modelos/inovela';

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
	novela: Inovela

	constructor() { }

	ngOnInit() {
	}

	grabar() {
		console.log(this.novela)
	}

}
