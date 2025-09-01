import express from 'express';
import Boom from '@hapi/boom';

import { errorMiddleware } from './middlewares/error';
import docsRouter from './routes/docs';
import rideRouter from './routes/ride';

const app = express();

app.use(express.json());

app.get('/health', (_, res) => res.send('Healthy'));

app.use('/docs', docsRouter);
app.use('/rides', rideRouter);

app.use(/(.*)/, (_, __, next) => {
  next(Boom.notFound('Route not found'));
});

app.use(errorMiddleware());

export default app;
