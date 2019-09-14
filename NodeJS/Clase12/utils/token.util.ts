import jwt = require("jwt-simple")
import moment = require("moment")

const palabraSecreta = "elPerúser@Camp30nMUNdiAlEnKattar2034"

const crearToken = (nombre: string, _id: string) => {
	const payload = {
		_id,
		nombre,
		iat: moment().unix(),
		exp: moment().add(30, "seconds").unix()
	}

	const token = jwt.encode(payload, palabraSecreta)

	return token
}

const validarToken = token => {
	return new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(token, palabraSecreta)
			resolve(payload)
		} catch (error) {
			reject(error)
		}
	})
}

export { crearToken, validarToken }
