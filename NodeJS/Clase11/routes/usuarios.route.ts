import * as express from "express"
import * as Joi from "@hapi/joi"
import { UsuariosSchema, validate } from "../validators"

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

RouteUsuarios.post("/:id", validate(UsuariosSchema.USUARIOS_POST_SCHEMA), (req, res) => {


	/* const esquema = Joi.object().keys({
		nombres: Joi.string().required(),
		apellidoPaterno: Joi.string().required(),
		apellidoMaterno: Joi.string(),
		contrasena: Joi.string().regex(/^[a-z]{2,3}[0-9]{5,5}$/).required()
	})

	const esquema2 = Joi.object().keys({
		id: Joi.number().required()
	})

	const validacion = Joi.validate(req.body, esquema) */



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