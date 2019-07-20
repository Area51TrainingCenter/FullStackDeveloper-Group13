import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild("f", { static: true }) form: NgForm

	registrar() {
		if (this.form.valid) {
			console.log("Formulario válido")
		} else {
			console.log("Formulario inválido")
		}
		console.log(this.form.value)
		console.log(this.form.form.getRawValue())
	}

	cargarDatos() {
		this.form.setValue({
			nombre: "Sergio",
			correo: "sergio@correo.com",
			contrasena: "123",
			confirmacion: "123"
		})
	}

	cargarDatosParciales() {
		this.form.form.patchValue({
			correo: "sergio@correo.com",
			contrasena: "123",
			confirmacion: "123"
		})
	}

	/* registrar(ref: NgForm) {
		if (ref.valid) {
			console.log("Formulario válido")
		} else {
			console.log("Formulario inválido")
		}
		console.log(ref)
	} */
}
