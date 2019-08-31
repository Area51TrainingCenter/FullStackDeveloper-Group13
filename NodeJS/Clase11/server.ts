/* import { inicializar } from "bin/app" */
import * as app from "./bin/app"
import { logger } from "./utils/log.util"

const iniciar = async () => {
	logger.info("Aplicación inicializándose")

	try {
		logger.info("Servidor inicializándose")
		await app.inicializar()
		logger.info("Servidor ejecutándose en el puerto 3000")
	} catch (error) {
		logger.error(error)
		process.exit(1)
	}
}

iniciar()

const apagar = async (err = null) => {
	let error = err

	try {
		logger.info("Servidor cerrándose")
		await app.cerrar()
		logger.info("Servidor cerrado")
	} catch (err) {
		logger.error("Ocurrió un error al cerrar", err)
		error = error || err
	}

	logger.info("Proceso de cerrado activo")

	if (error) process.exit(1)
	else process.exit(0)
}

process.on("SIGTERM", () => {
	logger.info("SIGTERM recibido")
	apagar()
})

process.on("SIGINT", () => {
	logger.info("SIGINT recibido")
	apagar()
})

process.on("uncaughtException", err => {
	logger.info("uncaught exception")
	apagar(err)
})