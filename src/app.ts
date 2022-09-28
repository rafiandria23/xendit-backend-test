import 'reflect-metadata';
import express from 'express';
import identifiers from './containers/identifiers';
import container from './containers';
import type {WinstonLoggerType} from './types/component';
import {errorMiddleware} from './middlewares/error';
import router from './routes';

const app = express();
const port = 8010;
const logger = container.get<WinstonLoggerType>(identifiers.components.logger);

app.use(express.json());

app.get('/health', (_, res) => res.send('Healthy'));

app.use('/rides', router);

app.use(errorMiddleware());

app.listen(port, () => {
	logger.log('info', `App started and listening on port ${port}`);
});
