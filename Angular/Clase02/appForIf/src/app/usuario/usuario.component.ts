import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

	@Input() userName: string
	@Input() name: string
	@Input("usuario") user: {}
	@Input() indice: number

	mostrar: boolean = false

	@Output() onEliminar = new EventEmitter<number>()

	constructor() { }

	ngOnInit() {
	}

	eliminar() {
		this.onEliminar.emit(this.indice)
	}

}
