import {injectable} from 'inversify';
import winston, {Logger} from 'winston';

@injectable()
class WinstonLogger extends Logger {
	constructor() {
		super({
			defaultMeta: {
				service: 'ride-api',
			},
			transports: [
				new winston.transports.Console({
					handleExceptions: true,
					handleRejections: true,
					format: winston.format.combine(
						winston.format.colorize(),
						winston.format.simple(),
					),
				}),
				new winston.transports.File({
					filename: 'logs/combined.log',
					level: 'info',
					format: winston.format.simple(),
				}),
				new winston.transports.File({
					filename: 'logs/errors.log',
					level: 'error',
					format: winston.format.simple(),
				}),
			],
		});
	}
}

export default WinstonLogger;
