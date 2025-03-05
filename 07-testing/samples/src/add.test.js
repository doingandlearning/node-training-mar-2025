import { test, expect, describe } from "vitest"
import { add } from "./add"

test("the happy path", () => {
	// Arrange - Given
	// Act - When
	// Assert - Then
	const result = add(1, 2)
	expect(result).toBe(3)
})
test("decimals add correctly", () => {
	// Arrange - Given
	// Act - When
	// Assert - Then
	const result = add(1.2, 2.7)
	expect(result).toBeCloseTo(3.9, 10)
})
test("negatives add correctly", () => {
	// Arrange - Given
	// Act - When
	// Assert - Then
	const result = add(-1, 2)
	expect(result).toBe(1)
})

// Parameterising!
describe("adding happy path", () => {
	const testCases = [
		[2, 3, 5],
		[-1, 0, -1],
		[9, 10, 19],
		[0.1, 0.3, 0.4],
		[-0.1, -1.2, -1.3]
	]

	for (const [a, b, expectedResult] of testCases) {
		test(`add ${a} and ${b} to get ${expectedResult}`, () => {
			const result = add(a, b)
			expect(result).toBe(expectedResult)
		})
	}
})

test.each([
	[2, 3, 5],
	[-1, 0, -1],
	[9, 10, 19],
	[0.1, 0.3, 0.4]
])("adds %d and %d to get %d", (a, b, expectedResult) => {
	expect(add(a, b)).toBe(expectedResult)
})

// 3. Unhappy paths
test("The add function errors when passed non-numbers", () => {
	expect(() => add(true, [])).toThrow()
	expect(() => add(true, [])).toThrowErrorMatchingInlineSnapshot(`[TypeError: Both values need to be positive numbers.]`)
	expect(() => add(true, [])).toThrowErrorMatchingSnapshot()

})