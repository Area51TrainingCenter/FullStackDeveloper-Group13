import * as Joi from "@hapi/joi"

class SeguridadSchema {
	static AUTENTICACION_SCHEMA = {
		headers: Joi.object().keys({
			authorization: Joi.string().required()
		})
	}
}

export default SeguridadSchema