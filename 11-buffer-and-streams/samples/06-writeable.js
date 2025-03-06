import { Writable } from "node:stream"
import { appendFile } from "node:fs"

const MyWritable = new Writable({
	async write(chunk, encoding, callback) {
		console.log(typeof chunk)
		const date = new Date()
		console.log(`Log ${date.toISOString()}`)
		await appendFile("test.txt", `${chunk} - ${date.toISOString()}\n`, () => { })
		callback()
	},
})

MyWritable.write("HEllo")
MyWritable.write(String(121))
MyWritable.write(String([1, 2, 3]))