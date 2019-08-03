import { Component } from '@angular/core';
import { AlumnoService } from './alumno.service';
import { pluck } from "rxjs/operators"
import { UsuariosService } from './usuarios.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	alumnos: any[]
	usuarios: any[]

	constructor(private alumnoService: AlumnoService, private usuarioService: UsuariosService) { }

	listarAlumnos() {
		this.alumnoService.listar()
			.pipe(
				pluck("results")
			)
			.subscribe(
				(data: any) => this.alumnos = data
			)
	}

	listarUsuarios() {
		this.usuarioService.listar()
			.subscribe(
				(data: any) => this.usuarios = data
			)
	}
}
