/* import { inicializar } from "bin/app" */
import * as app from "./bin/app"

const iniciar = async () => {
	/* 	app.inicializar()
			.then(() => console.log("Servidor ejecutándose"))
			.catch(error => console.log(error)) */

	try {
		console.log("Servidor inicializándose")
		await app.inicializar()
		console.log("Servidor ejecutándose en el puerto 3000")
	} catch (error) {
		console.error(error)
		process.exit(1)
	}
}

iniciar()

const apagar = async (err = null) => {
	let error = err

	try {
		console.log("Servidor cerrándose")
		await app.cerrar()
		console.log("Servidor cerrado")
	} catch (err) {
		console.log("Ocurrió un error al cerrar", err)
		error = error || err
	}

	console.log("Proceso de cerrado activo")

	if (error) process.exit(1)
	else process.exit(0)

}

process.on("SIGTERM", () => {
	console.log("SIGTERM recibido")
	apagar()
})

process.on("SIGINT", () => {
	console.log("SIGINT recibido")
	apagar()
})

process.on("uncaughtException", err => {
	console.log("uncaught exception")
	apagar(err)
})