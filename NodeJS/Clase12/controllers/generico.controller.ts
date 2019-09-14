class GenericoController {
	constructor(private modelo: any) {
		this.insertar = this.insertar.bind(this)
		this.listar = this.listar.bind(this)
		this.detallar = this.detallar.bind(this)
		this.modificar = this.modificar.bind(this)
		this.eliminar = this.eliminar.bind(this)
	}

	async listar(req, res, next) {
		const results = await this.modelo.find()

		res.json(
			{
				createdBy: res.locals.nombre,
				createdById: res.locals._id,
				status: 200,
				message: "List of documents",
				results
			}
		)
	}

	async detallar(req, res) {
		const filtro = { _id: req.params._id }

		const result = await this.modelo.findOne(filtro)
		res.json(
			{
				status: 200,
				message: "Detail document",
				result
			}
		)
	}

	async modificar(req, res) {
		const filtro = { _id: req.params._id }
		const data = req.body

		await this.modelo.updateOne(filtro, data)

		res.status(201).json({
			status: 201,
			message: "Document updated"
		})
	}

	async eliminar(req, res) {
		const filtro = { _id: req.params._id }

		await this.modelo.deleteOne(filtro)

		res.status(201).json({
			status: 201,
			message: "Document deleted"
		})
	}

	async insertar(req, res) {
		const obj = Object.assign({}, req.body)

		const mod = new this.modelo(obj)
		const result = await mod.save()

		res.status(201).json({
			status: 201,
			message: "Document inserted",
			result
		})
		/* 		const obj = {}
		
				for(let prop in req.body) {
					obj[prop] = req.body[prop]
				} */


		//res.send("elemento insertado")
	}
}

export default GenericoController