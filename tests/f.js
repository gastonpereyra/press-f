'use strict';

const assert = require('assert');

const F = require('../lib/f');

describe('Press F', () => {

	const functionWithError = (message, name) => {
		throw new F(message, name);
	};

	context('When use default values', () => {

		it('Should throws with default name and message', () => {

			assert.throws(() => functionWithError(), {
				name: 'Press F',
				message: 'Pay Respect'
			});
		});
	});

	context('When use custom message', () => {

		it('Should throws with default name but custom message', () => {

			assert.throws(() => functionWithError('Some Custom message'), {
				name: 'Press F',
				message: 'Some Custom message'
			});
		});

		it('Should throws with default name but custom number message', () => {

			assert.throws(() => functionWithError(1), {
				name: 'Press F',
				message: '1'
			});
		});

		it('Should throws with default name but other Error as message', () => {

			assert.throws(() => functionWithError(new Error('Other')), {
				name: 'Press F',
				message: 'Error: Other'
			});
		});
	});

	context('When use custom error name', () => {

		it('Should throws with custom name and default message', () => {

			assert.throws(() => functionWithError(undefined, 'MyError'), {
				name: 'MyError',
				message: 'Pay Respect'
			});
		});

		it('Should throws with custom name and custom message', () => {

			assert.throws(() => functionWithError(new Error(), 'MyError'), {
				name: 'MyError',
				message: 'Error'
			});
		});

		it('Should throws but try to change Error name but it is not an string', () => {

			assert.throws(() => functionWithError(undefined, 100), {
				name: 'Press F',
				message: 'Pay Respect'
			});
		});
	});
});
