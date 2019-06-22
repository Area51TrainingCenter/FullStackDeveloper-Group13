import { Component, OnInit } from '@angular/core';
import { Novela } from '../modelos/novela';
import { Inovela } from '../modelos/inovela';
import { NovelaService } from '../servicios/novela.service';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	novelas: Array<Inovela>

	constructor(private servicio: NovelaService) {
		this.novelas = this.servicio.listar()
		this.servicio.onActualizado
			.subscribe(
				() => {
					console.log("Se actualizo la lista")
					this.novelas = this.servicio.listar()
				}
			)
	}

	ngOnInit() {
	}

	intro(texto: string): string {
		return texto.substring(0, 50)
	}

	eliminar(indice: number) {
		this.servicio.eliminar(indice)
	}

}
