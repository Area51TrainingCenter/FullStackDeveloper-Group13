class GenericoController {
	constructor(private modelo: any) { }

	listar(req, res) {
		res.json(
			{
				status: 200,
				message: "Listado elementos",
				results: [
					{ nombre: "Alicia" },
					{ nombre: "Cinthya" },
					{ nombre: "Aida" }
				]
			}
		)
	}

	detallar(req, res) {
		res.json(
			{
				status: 200,
				message: "Detalle elemento",
				results: [
					{ nombre: "Alicia" }
				]
			}
		)
	}

	modificar(req, res) {
		res.send("elemento modificado")
	}

	eliminar(req, res) {
		res.send("elemento eliminado")
	}

	insertar(req, res) {
		res.send("elemento insertado")
	}
}

export default GenericoController