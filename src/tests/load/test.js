'use strict';

const {faker} = require('@faker-js/faker');

function generateCreateData(_, ctx, __, next) {
	/* eslint-disable camelcase */
	ctx.vars = {
		start_lat: faker.number.int({
			min: -90,
			max: 90,
		}),
		start_long: faker.number.int({
			min: -180,
			max: 180,
		}),
		end_lat: faker.number.int({
			min: -90,
			max: 90,
		}),
		end_long: faker.number.int({
			min: -180,
			max: 180,
		}),
		rider_name: faker.person.fullName(),
		driver_name: faker.person.fullName(),
		driver_vehicle: faker.vehicle.vehicle(),
	};

	return next();
}

module.exports = {
	generateCreateData,
};
