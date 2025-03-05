import http from "node:http"
import url from "node:url"
// const http = require("node:http")
// const url = require("node:url")
// path 

const server = http.createServer((request, response) => {
	const parsedUrl = url.parse(request.url, true)
	console.log(parsedUrl)
	const path = parsedUrl.pathname

	if (path === "/") {
		response.writeHead(200, { "Content-Type": "text/html", "x-bbc-says": "Hello" })
		response.write(`Home page - hello ${parsedUrl.query.name}`)
	} else if (path === "/about") {
		response.writeHead(200, { "Content-Type": "text/html", "x-bbc-says": "Hello" })
		response.write("About page")
	} else {
		response.writeHead(404, { "Content-Type": "text/html", "x-bbc-says": "Hello" })
		response.write("Not found")

	}
	response.end()
})

server.listen(3000)