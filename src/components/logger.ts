import {injectable} from 'inversify';
import winston from 'winston';
import type {WinstonLoggerType} from '../types/component';

@injectable()
class WinstonLogger implements WinstonLoggerType {
	private readonly logger: winston.Logger;

	constructor() {
		this.logger = winston.createLogger({
			defaultMeta: {
				service: 'ride-api',
			},
			format: winston.format.simple(),
			transports: [
				new winston.transports.Console({
					format: winston.format.simple(),
				}),
				new winston.transports.File({
					filename: 'logs/winston/combined.log',
					level: 'info',
				}),
				new winston.transports.File({
					filename: 'logs/winston/errors.log',
					level: 'error',
				}),
			],
		});
	}

	log(level: string, message: string) {
		this.logger.log(level, message);
	}
}

export default WinstonLogger;
