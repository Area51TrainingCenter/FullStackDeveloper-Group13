import * as Joi from "@hapi/joi"

const validate = schema => {
	return (req, res, next) => {
		const aValidar: {} = {};

		["body", "params", "query", "headers"].forEach(el => {
			if (schema[el]) aValidar[el] = req[el]
		})

		const validacion = Joi.validate(aValidar, schema)

		if (validacion.error) return res.status(411).json(validacion.error.details)

		next()
	}
}

export default validate