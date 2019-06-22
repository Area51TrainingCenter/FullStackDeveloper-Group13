import { EventEmitter } from '@angular/core';

export class Generico<T> {
	data: Array<T>
	onEmisor: EventEmitter<any>

	constructor(data: any, onEmisor: EventEmitter<any>) {
		this.data = data
		this.onEmisor = onEmisor
	}

	listar(): Array<T> {
		return Object.assign([], this.data)
	}

	listarUno(indice: number) {
		return Object.assign({}, this.data[indice])
	}

	insertar(el: T) {
		this.data.push(el)
		this.onEmisor.emit()
	}

	modificar(el: T, indice: number) {
		this.data[indice] = el
		this.onEmisor.emit()
	}

	eliminar(indice: number) {
		this.data.splice(indice, 1)
		this.onEmisor.emit()
	}
}