import {Sequelize} from 'sequelize-typescript';
import WinstonLogger from './logger';
import {Ride} from '../models';

const logger = new WinstonLogger();

const database = new Sequelize({
	dialect: 'sqlite',
	storage:
		process.env.NODE_ENV === 'test' ? ':memory:' : 'database/database.sqlite',
	repositoryMode: true,
	models: [Ride],
	logging: process.env.NODE_ENV === 'development' && ((sql: string) => {
		logger.log('debug', sql);
	}),
});

export default database;
