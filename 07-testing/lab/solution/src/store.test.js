import { describe, it, expect } from 'vitest';
import store from './store';

describe('store', () => {
	it('should return an error if the input is not a buffer', async () => {
		await new Promise((resolve) => {
			store('not a buffer', (err, result) => {
				expect(err).toBeInstanceOf(Error);
				expect(err.message).toBe('input must be a buffer');
				expect(result).toBeUndefined();
				resolve();
			});
		});
	});

	it('should return an id if the input is a buffer', (done) => {
		const buffer = Buffer.from('test');
		store(buffer, (err, result) => {
			expect(err).toBeNull();
			expect(result).toHaveProperty('id');
			expect(result.id).toHaveLength(4);
			done();
		});
	});

	it('should return different ids for different calls', (done) => {
		const buffer = Buffer.from('test');
		store(buffer, (err, result1) => {
			expect(err).toBeNull();
			store(buffer, (err, result2) => {
				expect(err).toBeNull();
				expect(result1.id).not.toBe(result2.id);
				done();
			});
		});
	});
});