import type {Handler} from 'express';
import type {ObjectSchema} from 'joi';
import Boom from '@hapi/boom';

export function validateParamsMiddleware(
	schema: ObjectSchema<unknown>,
): Handler {
	return (req, res, next) => {
		const {value, error} = schema.validate(req.params);

		if (error) {
			next(
				Boom.boomify(error as Error, {
					statusCode: 400,
				}),
			);
			return;
		}

		res.locals = value;

		next();
	};
}

export function validateQueryMiddleware<T>(
	schema: ObjectSchema<unknown>,
): Handler {
	return (req, res, next) => {
		const {value, error} = schema.validate(req.query);

		if (error) {
			next(
				Boom.boomify(error as Error, {
					statusCode: 400,
				}),
			);
			return;
		}

		res.locals = value;

		next();
	};
}

export function validateBodyMiddleware(schema: ObjectSchema<unknown>): Handler {
	return (req, res, next) => {
		const {value, error} = schema.validate(req.body);

		if (error) {
			next(
				Boom.boomify(error as Error, {
					statusCode: 400,
				}),
			);
			return;
		}

		res.locals = value;

		next();
	};
}
