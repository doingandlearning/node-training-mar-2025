// @ts-check
// 2009 - Node create by Ryan Dahl 
// - Module system didn't exist - require()
// - class/typing ... 

// 2015 - ES6/ES2015 - ECMAScript 6 -> JavaScript 6  - loads of updates!!
// 2016 - ES7/ES2016
// 2017 - ES8/ES2017
// 2018 - ES2018
// ... 

// 1. Default Parameters
const DEFAULT_WIDTH = 4
function areaOfRect(length = DEFAULT_WIDTH, width = length) {
	return length * width
}

console.log(areaOfRect(3))
console.log(areaOfRect())
console.log(areaOfRect(1, 2))
console.log(areaOfRect(true, "Ha!"))

// 2. Template Literals
const firstName = "David"
const lastName = "Colter-Bell"

const fullName = "Your name is " + firstName + " " + lastName + ".\n\n\n" // concatention
console.log(fullName)

const fullNameLiteral = `Your name is ${1 + 1} ${lastName.toUpperCase()}.


This is part of the same string.`
console.log(fullNameLiteral)



// 3. Object Literals
const make = "Apple"
const model = "M4 Max"
const year = 2025

const laptop = {
	make,
	model,
	year
}
console.log(laptop)

// 4. Arrow Functions (lambda functions)
function sayHi(person) {
	return `Hello ${person}!`
}

console.log(sayHi("Ayobami"))

const sayGoodbye = (person) => `Goodbye ${person}!` // Implicit return!

console.log(sayGoodbye("Jamie"))

// sayManyThings()

const sayManyThings = (person) => {
	let message = ""
	message += sayHi(person)
	message += sayGoodbye(person)
	return message // explicit with return!
}

console.log(sayManyThings("Tyra"))


function double(value) {
	return value * 2
}

console.log([1, 2, 3, 4].map(double))
console.log([1, 2, 3, 4].map((num) => num * 10))

// 5. var/let/const

// var 
// scope
// mutability
// hoisting 

function letFunction() {
	console.log("Before defining block: " + variable)
	if (true) {
		var variable = "Hello"
		console.log("In block: " + variable)
	}
	console.log("after defining block: " + variable)
}

letFunction()

// try to use const,
// use let if you need to ... 

const myName = "Kevin"

function simulateDom() {
	const pseudoDom = {
		button1: {},
		button2: {},
		button3: {}
	}
	for (let i = 1; i <= 3; i++) { // +
		const element = pseudoDom["button" + i] // ++
		element.click = function () {
			return "Item " + i + " is clicked"
		}
	}
	console.log(pseudoDom.button1.click()) // Item __ is clicked  1/2/3
	console.log(pseudoDom.button2.click()) // Item __ is clicked  Error?  3/3/3
	console.log(pseudoDom.button3.click()) // Item __ is clicked  1/1/1
}

simulateDom()