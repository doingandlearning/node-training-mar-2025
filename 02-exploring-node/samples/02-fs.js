import fs from "node:fs"
import os from "node:os"
// Error first callback
fs.readFile("example.txt", "utf-8", (error, data) => {
	if (error) {
		console.log(error)
		return
	}
	console.log(data)
})

fs.writeFile("example.txt", "This is my new file.", "utf-8", (error) => {
	if (error) {
		console.log(error)
	}
})

console.log(os.freemem())
console.log(os.machine())
console.log(os.hostname())