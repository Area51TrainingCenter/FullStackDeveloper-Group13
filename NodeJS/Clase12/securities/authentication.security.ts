import { validarToken } from "../utils/token.util";
import { IError } from "../handlers/errors.handler";

const AuthenticationSecurity = (req, res, next) => {
	const authorization = req.headers["authorization"]

	if (authorization && authorization.trim()) {
		const partes: Array<string> = authorization.trim().split(" ")

		validarToken(partes[1])
			.then((payload: any) => {
				res.locals = {
					_id: payload._id,
					nombre: payload.nombre
				}
				next()
			})
			.catch(error => {
				const err: IError = new Error("Token inválido")
				err.status = 409
				next(err)
			})
	} else {
		console.log("llega")
		res.status(401).json({
			status: 401,
			message: "Usuario no autenticado"
		})
	}
}

export default AuthenticationSecurity