import Joi from "@hapi/joi"

const validate = schema => {

	return async (req, res, next) => {
		const aValidar: {} = {};

		try {
			let error = false;

			["body", "params", "query", "headers"].forEach(async (el) => {
				const validacion = schema[el].validate(req[el])
				if (validacion.error) {
					error = true
					res.status(411).json(validacion.error.details)
				}
				//if (schema[el]) aValidar[el] = req[el]
			})

			if (!error) next()
		} catch (error) {

		}




		//const validacion = await schema["body"].validate(aValidar)

		console.log("pao")

		//next()
	}
}

export default validate