import {Router as router} from 'express';
import identifiers from '../containers/identifiers';
import container from '../containers';
import {
	validateBodyMiddleware,
	validateQueryMiddleware,
	validateParamsMiddleware,
} from '../middlewares/validate';
import type {RideControllerType} from '../types/controller';
import {
	createRideValidationSchema,
	getRidesValidationSchema,
	getRideByIdValidationSchema,
} from './validations';

const rideController = container.get<RideControllerType>(
	identifiers.controllers.ride,
);

const rideRouter = router();

rideRouter.post(
	'/',
	validateBodyMiddleware(createRideValidationSchema),
	rideController.createRide,
);

rideRouter.get(
	'/',
	validateQueryMiddleware(getRidesValidationSchema),
	rideController.getRides,
);
rideRouter.get(
	'/:id',
	validateParamsMiddleware(getRideByIdValidationSchema),
	rideController.getById,
);

export default rideRouter;
