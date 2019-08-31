import * as http from "http"
import * as express from "express"
import * as helmet from "helmet"
import * as bodyParser from "body-parser"
import { Application } from "express"
import { RouteUsuarios } from "../routes"

let httpServer: http.Server

const inicializar = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const app: Application = express()
		httpServer = http.createServer(app)

		app.use(helmet())
		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: true }))

		/*app.use((req, res, next) => {
			const token: string = "xxxxjalkdjflkjaldkfjalkdjlaksdjlaskd"

			if (token != "") return next()

			return res.status(401).json({
				status: 401,
				message: "Usuario no autenticado"
			})
		})

		app.use((req, res, next) => {
			const rol: string = "operador"

			if (rol == "admin") return next()

			res.status(409).json({
				status: 409,
				message: "No tiene los permisos requeridos"
			})
		})*/

		app.get("/", (req, res) => {
			res
				.type("text/html")
				.status(200)
				.send("<h1>Hola Mundo</h1>")
		})

		app.use("/usuarios", RouteUsuarios)



		httpServer.listen(3000)
			.on("listening", () => resolve())
			.on("error", err => reject(err))
	})
}

const cerrar = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		httpServer.close(err => {
			if (err) return reject(err)

			resolve()
		})
	})
}

export { inicializar, cerrar }