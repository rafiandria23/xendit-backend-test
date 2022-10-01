import {injectable, inject} from 'inversify';
import type {FindOptions} from 'sequelize';
import type {Repository} from 'sequelize-typescript';
import Boom from '@hapi/boom';
import identifiers from '../containers/identifiers';
import database from '../components/database';
import {Ride} from '../models';
import {WinstonLoggerType} from '../types/component';
import type {
	CreateRidePayloadType,
	PaginationOptionsType,
	RideServiceType,
} from '../types/service';

@injectable()
class RideService implements RideServiceType {
	@inject(identifiers.components.logger) logger!: WinstonLoggerType;

	private readonly _repository: Repository<Ride>;

	constructor() {
		this._repository = database.getRepository(Ride);
	}

	get repository() {
		return this._repository;
	}

	async getById(id: number): Promise<Ride> {
		const ride = await this.repository.findByPk(id);

		if (!ride) {
			throw Boom.notFound('Could not find any rides');
		}

		return ride;
	}

	async getRides(pagination: PaginationOptionsType): Promise<Ride[]> {
		const options: FindOptions = {
			offset: (pagination.page - 1) * pagination.size,
			limit: pagination.size,
			where: {},
		};

		const rides = await this.repository.findAll(options);

		if (!rides.length) {
			throw Boom.notFound('Could not find any rides');
		}

		return rides;
	}

	async createRide(payload: CreateRidePayloadType): Promise<Ride> {
		try {
			const ride = await this.repository.create({
				/* eslint-disable @typescript-eslint/naming-convention */
				start_lat: payload.start_lat,
				start_long: payload.start_long,
				end_lat: payload.end_lat,
				end_long: payload.end_long,
				rider_name: payload.rider_name,
				driver_name: payload.driver_name,
				driver_vehicle: payload.driver_vehicle,
				/* eslint-enable @typescript-eslint/naming-convention */
			});

			return ride;
		} catch (err: unknown) {
			this.logger.log('error', (err as Error).message);
			throw Boom.badImplementation('Failed creating ride');
		}
	}
}

export default RideService;
