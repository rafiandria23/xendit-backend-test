import type {Repository} from 'sequelize-typescript';

import type {Ride} from '../models';

export type Pagination = {
	page: number;
	size: number;
};

export type CreateRidePayload = {
	start_lat: number;
	start_long: number;
	end_lat: number;
	end_long: number;
	rider_name: string;
	driver_name: string;
	driver_vehicle: string;
};

export type RideService = {
	repository: Repository<Ride>;
	getById(id: number): Promise<Ride>;
	getRides(pagination: Pagination): Promise<Ride[]>;
	createRide(payload: CreateRidePayload): Promise<Ride>;
};
