import { Component, OnInit } from '@angular/core';
import { Novela } from '../modelos/novela';
import { Inovela } from '../modelos/inovela';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	novelas: Array<Inovela> = [
		{
			titulo: "El Perfume",
			descripcion: "Historia de un asesino que mata mujeres para extraer su esencia y crear perfumes",
			autor: "Patrick Suskind",
			anno: 1990
		},
		{
			titulo: "Jason y los argonautas",
			descripcion: "Narra la historia del viaje de Jason para obtener el vellocino de oro", autor: "Herodoto",
			anno: 50
		},
		{
			titulo: "El Caballero Carmelo",
			descripcion: "Cuenta la historia de un gallo viejo que se ve forzado a luchar con el 'Aji Seco', un gallo de pelea mas joven",
			autor: "Abraham Valdelomar",
			anno: 1910
		}
	]
	constructor() { }

	ngOnInit() {
	}

	intro(texto: string): string {
		return texto.substring(0, 50)
	}

}
