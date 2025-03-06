// Readable

// Writeable

// Duplex

// Transform

// Passthrough
import fs from "node:fs"
import { randomBytes } from "node:crypto"

const file = fs.createWriteStream("./big.file")

for (let i = 0; i <= 1e6; i++) {
	file.write(
		randomBytes(200).toString('hex')
	)
}

file.end()