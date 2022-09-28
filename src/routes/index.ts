import {Router as expressRouter} from 'express';
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

const router = expressRouter();

router.post(
	'/',
	validateBodyMiddleware(createRideValidationSchema),
	rideController.createRide,
);

router.get(
	'/',
	validateQueryMiddleware(getRidesValidationSchema),
	rideController.getRides,
);
router.get(
	'/:id',
	validateParamsMiddleware(getRideByIdValidationSchema),
	rideController.getById,
);

export default router;
