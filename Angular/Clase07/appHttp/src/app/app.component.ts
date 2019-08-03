import { Component } from '@angular/core';
import { AlumnoService } from './alumno.service';
import { pluck } from "rxjs/operators"
import { UsuariosService } from './usuarios.service';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	alumnos: any[]
	usuarios: Observable<any[]>

	suscripcionAlumnos: Subscription
	suscripcionUsuarios: Subscription

	grupo: FormGroup
	grupoEdicion: FormGroup

	constructor(private alumnoService: AlumnoService, private usuarioService: UsuariosService) { }

	ngOnInit() {
		this.grupo = new FormGroup({
			nombre: new FormControl(null, Validators.required),
			apellido: new FormControl(null, Validators.required)
		})

		this.grupoEdicion = new FormGroup({
			_id: new FormControl(null),
			nombre: new FormControl(null, Validators.required),
			apellido: new FormControl(null, Validators.required)
		})

		this.listarAlumnos()
	}

	listarAlumnos() {
		this.suscripcionAlumnos = this.alumnoService.listar()
			/* .pipe(
				pluck("results")
			) */
			.subscribe(
				(data: any) => this.alumnos = data
			)
	}

	listarUsuarios() {
		this.usuarios = this.usuarioService.listar()
		/* 		this.suscripcionUsuarios = this.usuarioService.listar()
					.subscribe(
						(data: any) => this.usuarios = data
					) */
	}

	ngOnDestroy() {
		this.suscripcionAlumnos.unsubscribe()
		this.suscripcionUsuarios.unsubscribe()
	}

	agregarAlumno() {
		console.log(this.grupo.value)
		console.log(this.grupo.getRawValue())
		this.alumnoService.insertar(this.grupo.getRawValue())
			.subscribe(
				respuesta => {
					this.grupo.reset()
					this.listarAlumnos()
					alert("Se insertó el registro")
				}
			)
	}

	editar(alumno) {
		const { _id, nombre, apellido } = alumno
		/* 		const nombre = alumno.nombre
				const apellido = alumno.apellido */

		this.grupoEdicion.setValue({ _id, nombre, apellido })
		/* 	this.grupoEdicion.setValue({ nombre: alumno.nombre, apellido: alumno.apellido }) */
	}

	actualizarAlumno() {
		const datos = this.grupoEdicion.getRawValue()

		this.alumnoService.actualizar(datos)
			.subscribe(
				() => {
					this.grupoEdicion.reset()
					this.listarAlumnos()
					alert("Alumno actualizado")
				}
			)
	}

	eliminar(_id) {
		if (confirm("Estás seguro?")) {
			this.alumnoService.eliminar(_id)
				.subscribe(
					() => {
						this.listarAlumnos()
						alert("El alumno fue eliminado")
					}
				)
		}
	}
}
