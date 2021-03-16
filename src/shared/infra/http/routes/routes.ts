import { Router } from 'express';

import ProductsController from '../../../../controllers/productController';
import UserController from '../../../../controllers/userController';

const routes = Router();

const productsController = new ProductsController();
const userController = new UserController();

routes.post('/createproduct', productsController.create);
routes.post('/createuser', userController.create);

export default routes;
