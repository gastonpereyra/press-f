'use strict';

module.exports = class F extends Error {

	constructor(error, name) {
		super(error || 'Pay Respect');

		this.name = typeof name === 'string' ? name : 'Press F';

		if(error instanceof Error)
			this.previousError = error;
	}
};
