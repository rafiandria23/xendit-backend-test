'use strict';

module.exports = {
	development: {
		dialect: 'sqlite',
		storage: 'database/database.sqlite',
	},
	test: {
		dialect: 'sqlite',
		storage: ':memory:',
	},
};
