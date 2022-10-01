import express from 'express';
import {errorMiddleware} from './middlewares/error';
import router from './routes';

const app = express();

app.use(express.json());

app.get('/health', (_, res) => res.send('Healthy'));

app.use('/rides', router);

app.use(errorMiddleware());

export default app;
