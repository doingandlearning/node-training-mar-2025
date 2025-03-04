function* generatePrimes(n) {
	function isPrime(num) {
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		return num !== 1;
	}

	let count = 0;
	let num = 2;

	while (count < n) {
		if (isPrime(num)) {
			yield num;
			count++;
		}
		num++;
	}
}

const firstHundredPrimes = generatePrimes(10)

for (const prime of firstHundredPrimes) {
	console.log(prime)
}

// redux 
//  - thunk
// function* 

function userGenerator(role) {
	let id = 1

	return (name) => ({
		name,
		id: id++,
		role
	})
}

const adminGenerator = userGenerator("admin")
const user1 = adminGenerator("David")
const user2 = adminGenerator("Tyra")
const user3 = adminGenerator("Mary Kate")

console.log(user1, user2, user3)