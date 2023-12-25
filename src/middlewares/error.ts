import type {ErrorRequestHandler} from 'express';
import Boom, {isBoom} from '@hapi/boom';

import identifiers from '../containers/identifiers';
import container from '../containers';
import type WinstonLogger from '../components/logger';

const logger = container.get<WinstonLogger>(identifiers.components.logger);

export function errorMiddleware(): ErrorRequestHandler {
	return (err, _, res, __) => {
		if (isBoom(err) && err.output.statusCode !== 500) {
			return res.status(err.output.statusCode).send(err.output.payload);
		}

		logger.log('error', err.stack);

		const internalServerError = Boom.internal();

		return res.status(internalServerError.output.statusCode).send(internalServerError.output.payload);
	};
}
