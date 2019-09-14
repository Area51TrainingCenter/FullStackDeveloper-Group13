import mongoose = require("mongoose")
import * as configDatabase from "../config/database.config"
import { logger } from "../utils/log.util"

const iniciarDB = async () => {
	mongoose.connect(configDatabase.connectionString, {
		keepAlive: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	})

	mongoose.Promise = global.Promise

	const promiseConnection = new Promise((resolve, reject) => {
		mongoose.connection.on("error", error => {
			logger.error(error)
			reject()
		})

		mongoose.connection.on("connected", () => {
			logger.info("Conectado a Mongo")
			logger.info("Creando modelos");

			require("../models/user.model")

			logger.info("Modelos creados")
			resolve()
		})

	})

	await promiseConnection
}
export { iniciarDB }