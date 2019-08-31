import * as fs from "fs"
import * as path from "path"

const rutaDirectorioLog = path.join(__dirname, "../", "logs")

fs.existsSync(rutaDirectorioLog) || fs.mkdirSync(rutaDirectorioLog)

export { rutaDirectorioLog }