import type {Request, Response, NextFunction} from 'express';
import type {Ride} from '../models';
import type {PaginationOptionsType, CreateRidePayloadType} from './service';

export type GetRideByIdParamsType = {
	id: number;
};

export type GetRidesQueriesType = PaginationOptionsType;

export type CreateRideBodyType = CreateRidePayloadType;

export type RideControllerType = {
	getById(
		req: Request,
		res: Response<Ride, GetRideByIdParamsType>,
		next: NextFunction,
	): Promise<Response<Ride, GetRideByIdParamsType>>;
	getRides(
		req: Request,
		res: Response<Ride[], GetRidesQueriesType>,
		next: NextFunction,
	): Promise<Response<Ride[], GetRidesQueriesType>>;
	createRide(
		req: Request,
		res: Response<Ride, CreateRideBodyType>,
		next: NextFunction,
	): Promise<Response<Ride, CreateRideBodyType>>;
};
