import * as winston from "winston"
import * as configLog from "../config/log.config"
import * as configGeneral from "../config/general.config"

const { combine, timestamp, printf, colorize } = winston.format

const formatoPersonalizado = printf(info => {
	return `[${info.timestamp}] ${info.level}: ${info.message}`
})

const logger = winston.createLogger({
	level: "info",
	format: combine(timestamp(), formatoPersonalizado),
	transports: [
		new winston.transports.File({
			level: "error",
			filename: `${configGeneral.rutaDirectorioLog}/error.log`,
			maxsize: configLog.maxTamano,
			maxFiles: configLog.maxArchivos
		}),
		new winston.transports.File({
			filename: `${configGeneral.rutaDirectorioLog}/combine.log`,
			maxsize: configLog.maxTamano,
			maxFiles: configLog.maxArchivos
		})
	]
})

logger.add(new winston.transports.Console({
	level: "debug",
	format: combine(colorize(), timestamp(), formatoPersonalizado)
}))

export { logger }