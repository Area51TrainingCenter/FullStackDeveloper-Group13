export class Novela {
	titulo: string
	descripcion: string
	autor: string
	anno: number

	constructor(titulo: string, descripcion: string, autor: string, anno: number) {
		this.titulo = titulo
		this.descripcion = descripcion
		this.autor = autor
		this.anno = anno
	}

	intro(): string {
		return this.descripcion.substring(0, 50)
	}
}
