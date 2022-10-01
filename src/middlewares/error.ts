import type {ErrorRequestHandler} from 'express';
import identifiers from '../containers/identifiers';
import container from '../containers';
import type {WinstonLoggerType} from '../types/component';

const logger = container.get<WinstonLoggerType>(identifiers.components.logger);

export function errorMiddleware(): ErrorRequestHandler {
	return (err, _, res, __) => {
		if (err.output.statusCode !== 500) {
			logger.log('error', err.output.payload.message);
		}

		res.status(err.output.statusCode).send(err.output.payload);
	};
}
