import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-reactive',
	templateUrl: './reactive.component.html',
	styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

	grupo: FormGroup

	listaCorreosGratuitos: Array<string> = [
		"gmail.com",
		"yahoo.com",
		"hotmail.com"
	]

	constructor() { }

	ngOnInit() {
		this.grupo = new FormGroup({
			nombre: new FormControl(null, Validators.required),
			correo: new FormControl(null, [Validators.required, Validators.email, this.validarCorreoNoGratuito.bind(this)]),
			contrasena: new FormControl(null, Validators.required),
			confirmacion: new FormControl(null, [Validators.required, this.validarConfirmacion]),
			terminos: new FormControl(false, Validators.requiredTrue)
		})
	}

	validarCorreoNoGratuito(control: FormControl): { [s: string]: boolean } {
		if (control.value) {
			const dominio = control.value.split("@")[1].toLowerCase()

			if (this.listaCorreosGratuitos.indexOf(dominio) > -1) {
				return { correoGratuito: true }
			}

			return null
		}

		return null
	}

	validarConfirmacion(control: AbstractControl): { [s: string]: boolean } {
		if (!control.parent || !control) return null

		const contrasena = control.parent.get("contrasena")
		const confirmacion = control.parent.get("confirmacion")

		if (!contrasena || !confirmacion) return null

		if (contrasena.value == "") return null

		if (contrasena.value != confirmacion.value) {
			return { contrasenaNoCoincide: true }
		}

		return null
	}

	registrar() {
		if (this.grupo.valid) {
			console.log("Formulario válido")
			console.log("Usando value", this.grupo.value)
			console.log("Usando getRawValue", this.grupo.getRawValue())
		} else {
			console.log("Formulario inválido")
		}
	}

	cargarDatos() {
		this.grupo.setValue({
			nombre: "Sergio",
			correo: "sergio@correo.com",
			contrasena: "123",
			confirmacion: "123"
		})
	}

	cargarDatosParciales() {
		this.grupo.patchValue({
			correo: "sergio@correo.com",
			contrasena: "123",
			confirmacion: "123"
		})
	}

}
