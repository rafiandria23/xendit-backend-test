import type {ErrorRequestHandler} from 'express';
import Boom from '@hapi/boom';

export function errorMiddleware(): ErrorRequestHandler {
	return (err, _, res, __) => {
		if (Boom.isBoom(err)) {
			res.status(err.output.statusCode).send(err.output.payload);
			return;
		}

		const defaultError = Boom.badImplementation('Unknown error occurred');

		res
			.status(defaultError.output.statusCode)
			.send(defaultError.output.payload);
	};
}
