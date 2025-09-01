import 'reflect-metadata';

import identifiers from './containers/identifiers';
import container from './containers';
import database from './components/database';
import type WinstonLogger from './components/logger';
import app from './app';

const port = 3000;
const logger = container.get<WinstonLogger>(identifiers.components.logger);

app.listen(port, async () => {
  await database.sync();

  logger.log('info', `App started and listening on port ${port}`);
});
