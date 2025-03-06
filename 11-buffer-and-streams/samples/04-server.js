import { createServer } from "node:http"
import { readFile } from "node:fs/promises"
import { createReadStream } from "node:fs"
import { createGzip } from "node:zlib"
// import {create} from "node:crypto"

const server = createServer()

server.on("request", async (req, res) => {
	// const data = await readFile("./big.file")
	const data = createReadStream("./big.file")
	const gzip = createGzip()


	// Readable
	data.pipe(gzip).pipe(res)
	req.pipe(res)
})

server.listen(3000, () => {
	console.log("Server listening")
})