import 'reflect-metadata';
import identifiers from './containers/identifiers';
import container from './containers';
import type {WinstonLoggerType} from './types/component';
import database from './components/database';
import app from './app';

const port = 8010;
const logger = container.get<WinstonLoggerType>(identifiers.components.logger);

app.listen(port, async () => {
	await database.sync();

	logger.log('info', `App started and listening on port ${port}`);
});
