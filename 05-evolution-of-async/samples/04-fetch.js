async function getData() {
	try {
		const response = await fetch('https://api.github.com/users/doingandlearning')
		if (!response.ok) {
			throw new Error(`Error with request: ${response.status} - ${response.statusText}`)
		}
		const data = await response.json()
		console.log(data)

	} catch (error) {
		// send some logging, call on the on-call - give the users a nice message	
		console.log(error.message)
		console.log(error.stack)
	}
}

getData()