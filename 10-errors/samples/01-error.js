// throw errors 
// catch errors

// use error codes!
// create custom errors

class OddNumberError extends Error {
	constructor(varName = '', code = "ERR_ODD_NUMBER") {
		super(`${varName} must be even.💩 `)
		this.code = code
	}
}

function doSomething(amount) {
	if (typeof amount !== "number") {
		const error = new TypeError("Amount must be a number")
		error.code = "ERR_AMOUNT_MUST_BE_NUMBER"
		throw error
	}
	if (amount < 0) {
		const error = new RangeError("We only deal with positive numbers")
		error.code = "ERR_POSITIVE_NUMBERS_ONLY"
		throw error
	}
	if (amount % 2 !== 0) {
		throw new OddNumberError("amount")
	}

	return amount / 2
}

Error()
EvalError()
SyntaxError()
ReferenceError()
URIError()

try {
	console.log(doSomething(3))
} catch (error) {
	if (error instanceof Error) {
		if (error.code === "ERR_POSITIVE_NUMBERS_ONLY") {
			console.log("Whoop! Positive numbers only please!")

		} else if (error.code === "ERR_AMOUNT_MUST_BE_NUMBER") {
			console.log("Value must be a number")
			// } else if (error.code === "ERR_ODD_NUMBER") {

		} else if (error instanceof OddNumberError) {
			console.log(error.message)
		}
		else {
			console.log(error)
		}
	}
}