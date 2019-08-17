console.log("Esto funciona")

const http = require("http")
//import * as http from "http"

const server = http.createServer((request, response) => {
	response.writeHead(200, { "content-type": "text/html" })
	response.write("<h1>Hola mundo</h1>")
	response.write("... otra vez")
	response.end()
})

server.listen(3000)