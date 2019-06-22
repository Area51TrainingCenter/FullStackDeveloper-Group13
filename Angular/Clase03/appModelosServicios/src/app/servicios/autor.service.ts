import { EventEmitter } from '@angular/core';
import { Generico } from './generico';
import { Iautor } from '../modelos/iautor';

export class AutorService extends Generico<Iautor> {

	onActualizado

	constructor() {
		var onUpdate = new EventEmitter()
		var autores = [
			{ nombre: "Nombre 1", apellido: "Apellido 1" },
			{ nombre: "Nombre 2", apellido: "Apellido 2" }
		]

		super(autores, onUpdate)
		this.onActualizado = onUpdate
	}

	listarPaginado(pagina: number) { }

	listar(): Array<Iautor> {
		return []
	}


}