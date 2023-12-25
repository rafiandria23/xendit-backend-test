import type {Handler} from 'express';
import type {ObjectSchema} from 'joi';
import Boom from '@hapi/boom';

import identifiers from '../containers/identifiers';
import container from '../containers';
import type WinstonLogger from '../components/logger';

const logger = container.get<WinstonLogger>(identifiers.components.logger);

export function validateParamsMiddleware<T>(
	schema: ObjectSchema<T>,
): Handler {
	return (req, res, next) => {
		const result = schema.validate(req.params);

		if (result.error) {
			logger.log('error', result.error.stack);
			next(Boom.badRequest(result.error));
			return;
		}

		(res.locals as T) = result.value;

		next();
	};
}

export function validateQueryMiddleware<T>(
	schema: ObjectSchema<T>,
): Handler {
	return (req, res, next) => {
		const result = schema.validate(req.query);

		if (result.error) {
			logger.log('error', result.error.stack);
			next(Boom.badRequest(result.error));
			return;
		}

		(res.locals as T) = result.value;

		next();
	};
}

export function validateBodyMiddleware<T>(
	schema: ObjectSchema<T>,
): Handler {
	return (req, res, next) => {
		const result = schema.validate(req.body);

		if (result.error) {
			logger.log('error', result.error.stack);
			next(Boom.badRequest(result.error));
			return;
		}

		(res.locals as T) = result.value;

		next();
	};
}
