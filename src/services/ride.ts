import { injectable, inject } from 'inversify';
import type { FindOptions } from 'sequelize';
import type { Repository } from 'sequelize-typescript';
import Boom from '@hapi/boom';

import identifiers from '../containers/identifiers';
import database from '../components/database';
import WinstonLogger from '../components/logger';
import { Ride } from '../models';
import type * as serviceTypes from '../types/service';

@injectable()
class RideService implements serviceTypes.RideService {
  @inject(identifiers.components.logger) logger!: WinstonLogger;

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

  async getRides(pagination: serviceTypes.Pagination): Promise<Ride[]> {
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

  async createRide(payload: serviceTypes.CreateRidePayload): Promise<Ride> {
    try {
      const ride = await this.repository.create({
        start_lat: payload.start_lat,
        start_long: payload.start_long,
        end_lat: payload.end_lat,
        end_long: payload.end_long,
        rider_name: payload.rider_name,
        driver_name: payload.driver_name,
        driver_vehicle: payload.driver_vehicle,
      } as Ride);

      return ride;
    } catch (err) {
      this.logger.log('error', (err as Error).stack);
      throw Boom.badImplementation('Failed creating ride!');
    }
  }
}

export default RideService;
