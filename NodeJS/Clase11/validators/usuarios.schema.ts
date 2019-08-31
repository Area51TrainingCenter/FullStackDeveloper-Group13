import * as Joi from "@hapi/joi"

class UsuariosSchema {
	static USUARIOS_POST_SCHEMA = {
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
}

export default UsuariosSchema