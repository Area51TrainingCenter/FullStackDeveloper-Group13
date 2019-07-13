import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
	id: number
	titulo: string
	fragmento: string

	constructor(private rutaActiva: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		//this.id = +this.rutaActiva.snapshot.params.id

		this.rutaActiva.paramMap
			.subscribe(
				(parametros: any) => {
					console.log("El observador trabajó")
					this.id = parametros.params.id
				}
			)

		this.rutaActiva.queryParamMap
			.subscribe(
				(parametros: any) => {
					console.log(parametros)
					console.log("El observador trabajó")
					this.titulo = parametros.params.titulo
				}
			)

		this.rutaActiva.fragment
			.subscribe(
				fragmento => this.fragmento = fragmento
			)




	}

	grabar() {
		this.router.navigate(["/curso", "edicion", 50], {
			queryParams: {
				subtitulo: "Fullstack"
			},
			queryParamsHandling: "merge"
		})
	}
}
