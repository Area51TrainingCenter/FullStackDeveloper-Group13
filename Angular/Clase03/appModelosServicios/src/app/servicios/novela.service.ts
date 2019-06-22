import { Inovela } from '../modelos/inovela';
import { EventEmitter } from '@angular/core';
import { Generico } from './generico';

export class NovelaService extends Generico<Inovela> {

	onActualizado

	constructor() {
		var onUpdate = new EventEmitter()
		var novelas = [
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

		super(novelas, onUpdate)
		this.onActualizado = onUpdate
	}


}