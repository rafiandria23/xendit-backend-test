import type {Ride} from '../models';

export type PaginationOptionsType = {
	page: number;
	size: number;
};

export type CreateRidePayloadType = {
	start_lat: number;
	start_long: number;
	end_lat: number;
	end_long: number;
	rider_name: string;
	driver_name: string;
	driver_vehicle: string;
};

export type RideServiceType = {
	getById(id: number): Promise<Ride>;
	getRides(pagination: PaginationOptionsType): Promise<Ride[]>;
	createRide(payload: CreateRidePayloadType): Promise<Ride>;
};
