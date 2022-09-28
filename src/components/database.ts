import {Sequelize} from 'sequelize-typescript';
import {Ride} from '../models';

const database = new Sequelize({
	dialect: 'sqlite',
	storage:
		process.env.NODE_ENV === 'test' ? ':memory:' : 'database/database.sqlite',
	repositoryMode: true,
	models: [Ride],
});

export default database;
