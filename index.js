'use strict';

const valid8 = require('valid-8')

module.exports = buf => {
	if (!Buffer.isBuffer(buf)) {
		throw new TypeError('Argument to detect-character-encoding must be a buffer.');
	}

	if (!valid8(buf)) {
		return null;
	}

	return {
		encoding: 'UTF-8',
		confidence: 100
	};
};
