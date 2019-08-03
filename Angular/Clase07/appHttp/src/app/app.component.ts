import { Component } from '@angular/core';
import { AlumnoService } from './alumno.service';
import { pluck } from "rxjs/operators"

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	alumnos: any[]

	constructor(private alumnoService: AlumnoService) { }

	listarAlumnos() {
		this.alumnoService.listar()
			.pipe(
				pluck("results")
			)
			.subscribe(
				(data: any) => this.alumnos = data
			)
	}
}
