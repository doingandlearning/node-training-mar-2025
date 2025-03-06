async function doSomething() {
	throw new Error("Something") // rejection - async error thrown
}


// exception - sync error thrown
async function run() {
	try {
		const task = doSomething() // 

		await task
	} catch (error) {
		console.log("In run method")
		throw error
	}
	//
}

try {
	run()
} catch (error) {
	console.log("On top level")
	console.log(error)
}
// 