const arrayOfNumbers = [1, 2, 3, 4, 5] // where in memory this array is!
const newArray = [...arrayOfNumbers] // ... spread operator

newArray.push(6) // neither! value/reference! new array!
console.log(arrayOfNumbers)
console.log(newArray)

// string

const name = "John"
const num1 = 1
const bigInt = 1n
const sym = Symbol()



const arrayOfObjects = [
	{ name: "Karla", team: "Audience Portal" },
	{ name: "Antonie", team: "Apps" }
]

// const newObjArray = JSON.parse(JSON.stringify(arrayOfObjects))
const newObjArray = structuredClone(arrayOfObjects)
newObjArray[0].team = "Polaris"

console.log(arrayOfObjects)
console.log(newObjArray)

console.log(arrayOfNumbers.map((num) => num - 10))
console.log(arrayOfNumbers)
console.log(arrayOfNumbers.filter((current, index, wholeArray) => current % 2 === 0))
console.log(arrayOfNumbers.reduce((previous, current, index, wholeArray) => previous + current, 10))


// Functional ! 

console.log(arrayOfNumbers.forEach((value, index, wholeArray) => console.log(value * 2)))




