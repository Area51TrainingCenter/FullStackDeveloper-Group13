const AuthenticationSecurity = (req, res, next) => {
	const authorization = req.headers["authorization"]

	const partes: Array<string> = authorization.trim().split(" ")

	if (partes[1]) {
		return next()
	}

	return res.status(401).json({
		status: 401,
		message: "Usuario no autenticado"
	})
}

export default AuthenticationSecurity