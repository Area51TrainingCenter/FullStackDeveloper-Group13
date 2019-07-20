import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-reactive',
	templateUrl: './reactive.component.html',
	styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

	grupo: FormGroup

	constructor() { }

	ngOnInit() {
		this.grupo = new FormGroup({
			nombre: new FormControl(null, Validators.required),
			correo: new FormControl(null, [Validators.required, Validators.email]),
			contrasena: new FormControl(null, Validators.required),
			confirmacion: new FormControl(null, Validators.required),
			terminos: new FormControl(false, Validators.requiredTrue)
		})
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
