import * as express from "express"

const RouteUsuarios = express.Router()

RouteUsuarios.get("/", (req, res) => {
	const data = {
		status: 200,
		message: "Lista de usuarios",
		results: [
			{ name: "Walter" },
			{ name: "Pedro" },
			{ name: "Alfonsina" }
		]
	}

	/* const serializado = JSON.stringify(data)
	res.type("application/json").status(200).send(serializado) */
	//res.status(200).json(data)
	res.json(data)
})

RouteUsuarios.post("/", (req, res) => {
	res.status(201).json({
		status: 201,
		message: "Usuario creado"
	})
})

RouteUsuarios.get("/activos", (req, res) => {
	res.status(200)
		.json(
			[
				{ nombre: "Claudia" },
				{ nombre: "Jana" }
			]
		)
})

//export { RouteUsuarios }
export default RouteUsuarios