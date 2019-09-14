import * as Joi from "@hapi/joi"

class UsuariosSchema {
	static USUARIOS_POST_SCHEMA = {
		body: Joi.object({
			name: Joi.string().required(),
			email: Joi.string().regex(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/).required(),
			password: Joi.string().required()
		})
	}
	/*static USUARIOS_POST_SCHEMA = {
		body: Joi.object({
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
	}*/

	static USUARIOS_GET_SCHEMA = {
		params: Joi.object().keys({
			id: Joi.number().required()
		})
	}

	static USUARIOS_DELETE_SCHEMA = {
		params: Joi.object().keys({
			id: Joi.number().required()
		})
	}

	static USUARIOS_PUT_SCHEMA = {
		params: Joi.object().keys({
			id: Joi.number().required()
		}),
		body: Joi.object().keys({
			nombres: Joi.string().required(),
			apellidoPaterno: Joi.string().required(),
			apellidoMaterno: Joi.string(),
			contrasena: Joi.string().regex(/^[a-z]{2,3}[0-9]{5,5}$/).required(),
			locales: Joi.array().items(Joi.object().keys({
				lat: Joi.number().required(),
				lng: Joi.number().required()
			})).required()
		})
	}
}

export default UsuariosSchema