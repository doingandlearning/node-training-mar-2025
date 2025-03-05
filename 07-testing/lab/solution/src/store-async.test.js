import { describe, it, expect } from "vitest";
import store from "./store-async";

describe("store", () => {
	it("should throw an error if input is not a buffer", async () => {
		await expect(store("not a buffer")).rejects.toThrow("input must be a buffer");
	});

	it("should return an object with an id property", async () => {
		const buffer = Buffer.from("test");
		const result = await store(buffer);
		expect(result).toHaveProperty("id");
	});

	it("should generate a unique id", async () => {
		const buffer = Buffer.from("test");
		const result1 = await store(buffer);
		const result2 = await store(buffer);
		expect(result1.id).not.toBe(result2.id);
	});

	it("should wait for 300ms before returning", async () => {
		const buffer = Buffer.from("test");
		const start = Date.now();
		await store(buffer);
		const end = Date.now();
		expect(end - start).toBeGreaterThanOrEqual(300);
	});
});