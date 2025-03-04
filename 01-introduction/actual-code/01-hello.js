console.log("hello")

function doSomething(n) {
	if (n == 0) {
		throw new Error("We don't like zeroes!")
	}
	console.log(n)
	doSomething(n - 1)
}

doSomething(1099)

// --check - syntax check
// --print - evaluate and print the result
// --eval  - evaluate (you'll have to tell it to print if you want)
// --require - preload a module
// --stack-trace-limit

// Probability: Even at 1 billion UUIDs per second, you'd need 85 years before 
// a 50% chance of a collision (Birthday Problem math).

// Math.random() => predictable 