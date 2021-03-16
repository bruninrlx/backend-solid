import '../typeorm';
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes/routes';




const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('server started on port 3333!');
});
