import * as Joi from "@hapi/joi"

class UsuariosValidators {
	static USUARIOS_POST(req, res, next) {
		const esquemas = {
			body: Joi.object().keys({
				nombres: Joi.string().required(),
				apellidoPaterno: Joi.string().required(),
				apellidoMaterno: Joi.string(),
				contrasena: Joi.string().regex(/^[a-z]{2,3}[0-9]{5,5}$/).required()
			}),
			params: Joi.object().keys({
				id: Joi.number().required()
			}),
			query: Joi.object().keys({
				rol: Joi.string().required()
			})
		}

		const aValidar: {} = {};

		["body", "params", "query", "headers"].forEach(el => {
			if (esquemas[el]) aValidar[el] = req[el]
		})

		const validacion = Joi.validate(aValidar, esquemas)

		if (validacion.error) return res.status(411).json(validacion.error.details)

		next()
	}
}

export default UsuariosValidators