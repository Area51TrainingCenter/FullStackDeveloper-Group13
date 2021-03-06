import * as http from "http"
import * as express from "express"
import { Application } from "express"

let httpServer: http.Server

const inicializar = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		const app: Application = express()
		httpServer = http.createServer(app)

		app.get("/", (req, res) => {
			res
				.type("text/html")
				.status(200)
				.send("<h1>Hola Mundo</h1>")
		})

		/* 		httpServer.listen(3000, ()=> {
					console.log("Servidor ejecutándose en el puerto 3000")
					resolve()
				}) */

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