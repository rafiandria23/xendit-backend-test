import { injectable, inject } from 'inversify';
import type { Request, Response, NextFunction } from 'express';

import WinstonLogger from '../components/logger';
import type { Ride } from '../models';
import identifiers from '../containers/identifiers';
import * as serviceTypes from '../types/service';
import type * as controllerTypes from '../types/controller';

@injectable()
class RideController implements controllerTypes.RideController {
  @inject(identifiers.components.logger) logger!: WinstonLogger;
  @inject(identifiers.services.ride) service!: serviceTypes.RideService;

  getById = async (
    _: Request,
    res: Response<Ride, controllerTypes.GetRideByIdParam>,
    next: NextFunction,
  ): Promise<Response<Ride, controllerTypes.GetRideByIdParam> | void> => {
    const { id } = res.locals;

    try {
      const ride = await this.service.getById(id);

      return res.send(ride);
    } catch (err) {
      next(err);
    }
  };

  getRides = async (
    _: Request,
    res: Response<Ride[], serviceTypes.Pagination>,
    next: NextFunction,
  ): Promise<Response<Ride[], serviceTypes.Pagination> | void> => {
    const pagination = res.locals;

    try {
      const rides = await this.service.getRides(pagination);

      return res.send(rides);
    } catch (err) {
      next(err);
    }
  };

  createRide = async (
    _: Request,
    res: Response<Ride, serviceTypes.CreateRidePayload>,
    next: NextFunction,
  ): Promise<Response<Ride, serviceTypes.CreateRidePayload> | void> => {
    const payload = res.locals;

    try {
      const newRide = await this.service.createRide(payload);

      return res.status(201).send(newRide);
    } catch (err: unknown) {
      next(err);
    }
  };
}

export default RideController;
