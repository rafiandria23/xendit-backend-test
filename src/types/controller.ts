import type {Request, Response, NextFunction} from 'express';

import type {Ride} from '../models';
import type {Pagination, CreateRidePayload} from './service';

export type GetRideByIdParam = {
	id: number;
};

export type RideController = {
	getById(
		req: Request,
		res: Response<Ride, GetRideByIdParam>,
		next: NextFunction,
	): Promise<Response<Ride, GetRideByIdParam> | void>;
	getRides(
		req: Request,
		res: Response<Ride[], Pagination>,
		next: NextFunction,
	): Promise<Response<Ride[], Pagination> | void>;
	createRide(
		req: Request,
		res: Response<Ride, CreateRidePayload>,
		next: NextFunction,
	): Promise<Response<Ride, CreateRidePayload> | void>;
};
