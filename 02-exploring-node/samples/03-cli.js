// node 03-cli.js 3 4
// 7

const firstNumber = parseInt(process.argv[2])
const secondNumber = parseInt(process.argv[3])

function add(firstNumber, secondNumber) {
	return firstNumber + secondNumber
}

console.log(add(firstNumber, secondNumber))