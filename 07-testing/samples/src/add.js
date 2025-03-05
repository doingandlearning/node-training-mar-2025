export function add(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw new TypeError("Both values need to be positive numbers.")
	}
	return a + b
}