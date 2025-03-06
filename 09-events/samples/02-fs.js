import fs from "node:fs"
import { EventEmitter } from "node:events"

// const ee = new EventEmitter()

class FileWatcher extends EventEmitter {
	constructor(filePath) {
		super()
		this.filePath = filePath
		this.watchFile()
	}

	watchFile() {
		fs.watch(this.filePath, (eventType, filename) => {
			if (filename) {
				this.emit('fileChanged', { eventType, filename })
			}
		})
	}
}


const filePath = "."
const watcher = new FileWatcher(filePath)

watcher.on("fileChanged", (data) => {
	console.log(data)
})
watcher.on("fileChanged", (data) => {
	fs.appendFile("../log.log", `${data.eventType}: ${data.filename}`, (err) => {
		if (err) console.log(err)
	})
})

// fs.watch(filePath, (eventType, filename) => {
// 	console.log(eventType, filename)
// })

// fs.watch(filePath, (eventType, filename) => {
// 	fs.appendFile("log.log", `${eventType}: ${filename}\n`, () => { })
// })



fs.writeFile("./test.txt", "This a test", () => { })
fs.appendFile("./test.txt", "This a test", () => { })
fs.writeFile("./test1.txt", "This a test", () => { })
fs.appendFile("./test1.txt", "This a test", () => { })
fs.unlink("./test.txt", () => { })