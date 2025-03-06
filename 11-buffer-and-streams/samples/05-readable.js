import { createReadStream, createWriteStream } from "node:fs";
import { Readable } from "node:stream";
import { EventEmitter } from "node:events";
// const stream = createReadStream("./big.file")

// stream.pipe(process.stdout)

class Numberstream extends Readable {
	current = 0;
	max;

	constructor(max, options = {}) {
		super(options)
		this.max = max
	}

	_read() {
		const interval = setInterval(() => {
			if (this.current < this.max) {
				console.log(`Pushing number: ${this.current}`)
				this.push(String(this.current))
				this.current += 1
			} else {
				clearInterval(interval)
				this.push(null)
			}
		}, 1000)
	}
}

const writeStream = createWriteStream("numbers.txt")
const numberStream = new Numberstream(10)
// numberStream.pipe(process.stdout)



numberStream.on("data", (chunk) => console.log(chunk.toString()))
numberStream.on("data", (chunk) => writeStream.write(chunk.toString()))
numberStream.on("error", (error) => console.log(error))