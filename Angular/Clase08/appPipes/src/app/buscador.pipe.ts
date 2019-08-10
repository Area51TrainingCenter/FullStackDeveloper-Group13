import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

	transform(value: any[], aBuscar: string): any[] {
		return value.filter(item => item.titulo.indexOf(aBuscar) > -1)
	}

}
