import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map, retry } from "rxjs/operators"
import { Curso } from './cursos.interface';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	cursosAbiertos: Curso[] = []
	cursosCerrados: Curso[] = []
	cursos: Curso[] = []

	dataCargada: boolean = false

	constructor() { }

	ngOnInit() {
		const obs: Observable<Array<Curso>> = Observable.create(
			(observador: Observer<Array<Curso>>) => {
				setTimeout(() => {
					observador.next([
						{ curso: "Angular", estado: 1 },
						{ curso: "Microservicios", estado: 2 },
						{ curso: "Angular DevOps", estado: 2 }
					])
				}, 2000)

				setTimeout(() => {
					observador.next([
						{ curso: "Testing Angular", estado: 2 }
					])
				}, 4000)

				setTimeout(() => {
					observador.next([
						{ curso: "Aplicando Cucumber a Angular", estado: 2 },
						{ curso: "NodeJS", estado: 1 },
						{ curso: "Escalando Mongo", estado: 2 },
						{ curso: "MongoDB", estado: 1 }
					])
				}, 6000)

				setTimeout(() => {
					observador.complete()
				}, 7000)
			}
		)

		obs
			.pipe(
				retry(3),
				map(el => {
					const transformado = el.map(item => {
						item.curso = item.curso.toUpperCase()
						return item
					})

					return transformado
				})
			)
			.subscribe(
				(data: Curso[]) => {
					const abiertos = data.filter(curso => curso.estado == 1)
					this.cursosAbiertos = [...this.cursosAbiertos, ...abiertos]
				},
				null,
				() => this.dataCargada = true
			)

		obs
			.subscribe(
				(data: Curso[]) => {
					const cerrados = data.filter(curso => curso.estado == 2)
					this.cursosCerrados = [...this.cursosCerrados, ...cerrados]
				}
			)
	}

	listar(tipo: number) {
		this.cursos = tipo == 1 ? this.cursosAbiertos : this.cursosCerrados
	}

}
