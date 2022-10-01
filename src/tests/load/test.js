'use strict';

const {faker} = require('@faker-js/faker');

function generateCreateData(_, ctx, __, next) {
	/* eslint-disable camelcase */
	ctx.vars = {
		start_lat: faker.datatype.number({
			min: -90,
			max: 90,
		}),
		start_long: faker.datatype.number({
			min: -180,
			max: 180,
		}),
		end_lat: faker.datatype.number({
			min: -90,
			max: 90,
		}),
		end_long: faker.datatype.number({
			min: -180,
			max: 180,
		}),
		rider_name: faker.name.fullName(),
		driver_name: faker.name.fullName(),
		driver_vehicle: faker.vehicle.vehicle(),
	};

	return next();
}

module.exports = {
	generateCreateData,
};
