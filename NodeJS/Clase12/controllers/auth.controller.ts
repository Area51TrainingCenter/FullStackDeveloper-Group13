import User from "../models/user.model";
import { crearToken } from "../utils/token.util";
import { IError } from "../handlers/errors.handler";

export class AuthController {
	async login(req, res, next) {
		const credenciales = req.body

		const user = await User.findOne(credenciales)

		if (user) {
			const token = crearToken(user.name, user._id)

			return res.json({
				name: user.name,
				token
			})
		}

		const error: IError = new Error("User not authenticated")
		error.status = 401

		next(error)
	}
}