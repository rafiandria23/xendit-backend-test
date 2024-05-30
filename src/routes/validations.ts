import Joi from 'joi';

export const getRideByIdValidationSchema = Joi.object({
  id: Joi.number().min(1).required(),
}).required();

export const getRidesValidationSchema = Joi.object({
  page: Joi.number().min(1).optional().default(1),
  size: Joi.number().min(1).max(100).optional().default(10),
}).optional();

export const createRideValidationSchema = Joi.object({
  start_lat: Joi.number().greater(-90).less(90).allow(-90, 90).required(),
  start_long: Joi.number().greater(-180).less(180).allow(-180, 180).required(),
  end_lat: Joi.number().greater(-90).less(90).allow(-90, 90).required(),
  end_long: Joi.number().greater(-180).less(180).allow(-180, 180).required(),
  rider_name: Joi.string().required(),
  driver_name: Joi.string().required(),
  driver_vehicle: Joi.string().required(),
}).required();
