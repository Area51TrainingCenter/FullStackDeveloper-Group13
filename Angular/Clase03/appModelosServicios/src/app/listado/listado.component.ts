import { Component, OnInit } from '@angular/core';
import { Novela } from '../modelos/novela';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	novelas: Array<Novela> = [
		new Novela("El Perfume", "Historia de un asesino que mata mujeres para extraer su esencia y crear perfumes", "Patrick Suskind", 1990),
		new Novela("Jason y los argonautas", "Narra la historia del viaje de Jason para obtener el vellocino de oro", "Herodoto", 50),
		new Novela("El Caballero Carmelo", "Cuenta la historia de un gallo viejo que se ve forzado a luchar con el 'Aji Seco', un gallo de pelea mas joven", "Abraham Valdelomar", 1910)
	]
	constructor() { }

	ngOnInit() {
	}

}
