import * as http from "http"
import * as express from "express"
import * as helmet from "helmet"
import * as bodyParser from "body-parser"
import { Application } from "express"
import { RouteUsuarios, RouteAuth } from "../routes"
import { general, pathNotFound } from "../handlers/errors.handler";

let httpServer: http.Server

const inicializar = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const app: Application = express()
		httpServer = http.createServer(app)

		app.use(helmet())
		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: true }))

		app.get("/", (req, res) => {
			res
				.type("text/html")
				.status(200)
				.send("<h1>Hola Mundo</h1>")
		})

		app.use("/usuarios", RouteUsuarios)
		app.use("/auth", RouteAuth)

		app.use(pathNotFound)

		app.use(general)



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