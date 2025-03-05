import { describe, it, expect } from 'vitest';
import uppercase from './uppercase';

describe('uppercase', () => {
	it('should convert a string to uppercase', () => {
		expect(uppercase('hello')).toBe('HELLO');
	});

	it('should throw an error if input is not a string', () => {
		expect(() => uppercase(123)).toThrow('input must be a string');
	});

	it('should return an empty string if input is an empty string', () => {
		expect(uppercase('')).toBe('');
	});

	it('should handle strings with mixed case', () => {
		expect(uppercase('HeLLo WoRLd')).toBe('HELLO WORLD');
	});

	it('should handle strings with special characters', () => {
		expect(uppercase('hello!')).toBe('HELLO!');
	});

	it('should handle strings with numbers', () => {
		expect(uppercase('hello123')).toBe('HELLO123');
	});
});