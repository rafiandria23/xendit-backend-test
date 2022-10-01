import request from 'supertest';
import {expect} from 'chai';
import {faker} from '@faker-js/faker';
import database from '../components/database';
import app from '../app';

describe('API Tests', () => {
	beforeEach(async () => {
		await database.sync();
	});

	const payload = {
		/* eslint-disable @typescript-eslint/naming-convention */
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
		/* eslint-enable @typescript-eslint/naming-convention */
	};

	describe('GET /health', () => {
		it('should return health', async () => {
			const regex = /text/i;

			const result = await request(app)
				.get('/health');

			expect(regex.test(result.headers['content-type'])).to.equal(true);
			expect(result.statusCode).to.equal(200);
		});
	});

	describe('POST /rides', () => {
		it('should return ride', async () => {
			const result = await request(app)
				.post('/rides')
				.send(payload);

			expect(result.statusCode).to.equal(201);
		});

		it('should return return 400', async () => {
			const result = await request(app)
				.post('/rides')
				.send({});

			expect(result.statusCode).to.equal(400);
		});

		it('should return 500', async () => {
			await database.dropAllSchemas({});

			const result = await request(app)
				.post('/rides')
				.send(payload);

			expect(result.statusCode).to.equal(500);
		});
	});

	describe('GET /rides/:id', () => {
		it('should return 200', async () => {
			const createResult = await request(app)
				.post('/rides')
				.send(payload);

			const id = createResult.body.id as number;

			const result = await request(app)
				.get(`/rides/${id}`);

			expect(createResult.statusCode).to.equal(201);
			expect(result.statusCode).to.equal(200);
		});

		it('should return 400', async () => {
			const id = faker.random.word();

			const result = await request(app)
				.get(`/rides/${id}`);

			expect(result.statusCode).to.equal(400);
		});

		it('should return 404', async () => {
			const id = faker.datatype.number({min: 1});

			const result = await request(app)
				.get(`/rides/${id}`);

			expect(result.statusCode).to.equal(404);
		});
	});

	describe('GET /rides', () => {
		it('should return 200', async () => {
			const createResult = await request(app)
				.post('/rides')
				.send(payload);

			const result = await request(app)
				.get('/rides')
				.query({
					page: 1,
					size: 5,
				});

			expect(createResult.statusCode).to.equal(201);
			expect(result.statusCode).to.equal(200);
		});

		it('should return 400', async () => {
			const result = await request(app)
				.get('/rides')
				.query({
					page: faker.random.word(),
				});

			expect(result.statusCode).to.equal(400);
		});

		it('should return 404', async () => {
			const result = await request(app)
				.get('/rides')
				.query({
					page: 100,
				});

			expect(result.statusCode).to.equal(404);
		});
	});

	it('should return 404 when no route matched', async () => {
		const result = await request(app)
			.get('/unknown');

		expect(result.statusCode).to.equal(404);
	});
});
