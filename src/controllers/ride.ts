import {injectable, inject} from 'inversify';
import type {Request, Response, NextFunction} from 'express';
import type {Ride} from '../models';
import identifiers from '../containers/identifiers';
import {WinstonLoggerType} from '../types/component';
import {RideServiceType} from '../types/service';
import type {
	CreateRidePayloadType,
	PaginationOptionsType,
} from '../types/service';
import type {
	GetRideByIdParamsType,
	RideControllerType,
} from '../types/controller';
import autoBind from 'auto-bind';

@injectable()
class RideController implements RideControllerType {
	@inject(identifiers.components.logger) logger: WinstonLoggerType;
	@inject(identifiers.services.ride) service: RideServiceType;

	constructor() {
		autoBind(this);
	}

	async getById(
		_: Request,
		res: Response<Ride, GetRideByIdParamsType>,
		next: NextFunction,
	): Promise<Response<Ride, GetRideByIdParamsType>> {
		const {id} = res.locals;

		try {
			const ride = await this.service.getById(id);

			return res.send(ride);
		} catch (err: unknown) {
			next(err);
		}
	}

	async getRides(
		_: Request,
		res: Response<Ride[], PaginationOptionsType>,
		next: NextFunction,
	): Promise<Response<Ride[], PaginationOptionsType>> {
		const pagination = res.locals;

		try {
			const rides = await this.service.getRides(pagination);

			return res.send(rides);
		} catch (err: unknown) {
			next(err);
		}
	}

	async createRide(
		_: Request,
		res: Response<Ride, CreateRidePayloadType>,
		next: NextFunction,
	): Promise<Response<Ride, CreateRidePayloadType>> {
		const payload = res.locals;

		try {
			const newRide = await this.service.createRide(payload);

			return res.send(newRide);
		} catch (err: unknown) {
			next(err);
		}
	}
}

export default RideController;
