import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'appObservables';
	listadoUsuarios = []
	listadoMujeres = []

	ngOnInit() {
		/* const obs: Observable<string> = Observable.create(
			(observador: Observer<string>) => {
				setTimeout(() => {
					observador.next("Alguien tocó la puerta")
				}, 3000)

				setTimeout(() => {
					observador.next("Vino el inspector de la municipalidad")
				}, 6000)

				setTimeout(() => {
					observador.complete()
				}, 7000)

				setTimeout(() => {
					observador.next("Se fue la corriente en toda la cuadra")
				}, 8000)

				setTimeout(() => {
					observador.error("Se inundó la casa")
				}, 10000)

				setTimeout(() => {
					observador.next("Llegaron dos evangelistas")
				}, 12000)
			}
		) */

		const obs: Observable<Array<{}>> = Observable.create(
			(observador: Observer<Array<{}>>) => {
				setTimeout(() => {
					observador.next([{ usuario: "Pedro", sexo: 1 }])
				}, 2000)

				setTimeout(() => {
					observador.next([
						{ usuario: "María Luisa", sexo: 2 },
						{ usuario: "Jimena", sexo: 2 }
					])
				}, 4000)
			}
		)

		obs
			.subscribe(
				(data: Array<{}>) => {
					this.listadoUsuarios = [...this.listadoUsuarios, ...data]
					console.log("Todos", this.listadoUsuarios)
				}
			)

		obs.subscribe(
			(data: Array<{}>) => {
				const soloMujeres = data.filter((item: any) => item.sexo == 2)

				this.listadoMujeres = [...this.listadoMujeres, ...soloMujeres]
				console.log("Mujeres", this.listadoMujeres)
			}
		)




		/* 		obs.subscribe(
					data => console.log("Data", data),
					error => console.log("Error:", error),
					() => console.log("Complete", "Tarea concluida")
				) */
	}



}
