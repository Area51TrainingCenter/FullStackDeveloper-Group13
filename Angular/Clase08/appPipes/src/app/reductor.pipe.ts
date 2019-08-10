import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: "reductor"
})
export class ReductorPipe implements PipeTransform {
	/* 	transform(value: string, maximo: number, texto: string): string {
			if (value.length > maximo) {
				return value.substring(0, maximo) + " ... " + texto
			}
	
			return value
		} */
	transform(value: string, maximo: number, texto: string): string {
		/* 		const enPalabras = value.split(" ")
				if (enPalabras.length > maximo) {
					return enPalabras.slice(0, maximo).join(" ")
				}
				return value */
		return value.split(" ").length > maximo ? value.split(" ").slice(0, maximo).join(" ") + "... " + texto : value
	}
}