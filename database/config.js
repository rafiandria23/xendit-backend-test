'use strict';

const path = require('path');

module.exports = {
	development: {
		dialect: 'sqlite',
		storage: 'database/database.sqlite',
	},
	test: {
		dialect: 'sqlite',
		storage: ':memory:',
		migrations: {
			directory: path.join(__dirname, 'migrations'),
		},
	},
};
