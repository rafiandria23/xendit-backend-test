
import {expect} from 'chai';
import sinon from 'sinon';
import Boom from '@hapi/boom';
import {faker} from '@faker-js/faker';

import identifiers from '../containers/identifiers';
import container from '../containers';
import type {RideService, CreateRidePayload} from '../types/service';
import type {Ride} from '../models';

const sandbox = sinon.createSandbox();
const service = container.get<RideService>(identifiers.services.ride);

describe('RideService', () => {
	afterEach(() => {
		sandbox.restore();
	});

	const ride = {
		/* eslint-disable @typescript-eslint/naming-convention */
		id: faker.number.int({
			min: 1,
		}),
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
		created_at: new Date(),
		updated_at: new Date(),
		/* eslint-enable @typescript-eslint/naming-convention */
	};

	describe('.getById', () => {
		it('should return ride', async () => {
			const findByPkStub = sandbox.stub(service.repository, 'findByPk')
				.resolves(ride as Ride);

			const result = await service.getById(ride.id);

			expect(findByPkStub.calledOnce).to.equal(true);
			expect(result).to.deep.equal(ride);
		});

		it('should return 404', async () => {
			const id = faker.number.int({
				min: 1,
			});
			const findByPkStub = sandbox.stub(service.repository, 'findByPk')
				.resolves(null);

			let err: unknown;

			try {
				await service.getById(id);
			} catch (error: unknown) {
				err = error;
			}

			expect(findByPkStub.calledOnce).to.equal(true);
			expect(Boom.isBoom(err)).to.equal(true);
			expect((err as Boom.Boom).output.statusCode).to.equal(404);
		});
	});

	describe('.getRides', () => {
		it('should return rides', async () => {
			const findAllStub = sandbox.stub(service.repository, 'findAll')
				.resolves([
					ride,
				] as Ride[]);

			const result = await service.getRides({
				page: faker.number.int({
					min: 1,
				}),
				size: faker.number.int({
					min: 1,
				}),
			});

			expect(findAllStub.calledOnce).to.equal(true);
			expect(result).to.deep.equal([ride]);
		});

		it('should return 404', async () => {
			const findAllStub = sandbox.stub(service.repository, 'findAll')
				.resolves([]);

			let err: unknown;

			try {
				await service.getRides({
					page: faker.number.int({
						min: 1,
					}),
					size: faker.number.int({
						min: 1,
					}),
				});
			} catch (error: unknown) {
				err = error;
			}

			expect(findAllStub.calledOnce).to.equal(true);
			expect(Boom.isBoom(err)).to.equal(true);
			expect((err as Boom.Boom).output.statusCode).to.equal(404);
		});
	});

	describe('.createRide', () => {
		it('should return ride', async () => {
			const createStub = sandbox.stub(service.repository, 'create')
				.resolves(ride as Ride);

			const payload: CreateRidePayload = {
				/* eslint-disable @typescript-eslint/naming-convention */
				start_lat: ride.start_lat,
				start_long: ride.start_long,
				end_lat: ride.end_lat,
				end_long: ride.end_long,
				rider_name: ride.rider_name,
				driver_name: ride.driver_name,
				driver_vehicle: ride.driver_vehicle,
				/* eslint-enable @typescript-eslint/naming-convention */
			};

			const result = await service.createRide(payload);

			expect(createStub.calledOnce).to.equal(true);
			expect(result).to.deep.equal(ride);
		});

		it('should retun 500', async () => {
			const createStub = sandbox.stub(service.repository, 'create')
				.throws(new Error());

			let err: unknown;

			try {
				await service.createRide({} as CreateRidePayload);
			} catch (error: unknown) {
				err = error;
			}

			expect(createStub.calledOnce).to.equal(true);
			expect(Boom.isBoom(err)).to.equal(true);
			expect((err as Boom.Boom).output.statusCode).to.equal(500);
		});
	});
});
