import { Router } from 'express';

import ProductsController from '../../../../controllers/productController';
import UserController from '../../../../controllers/userController';

const routes = Router();

const productsController = new ProductsController();
const userController = new UserController();

routes.post('/createproduct', productsController.create);
routes.post('/createuser', userController.createUser);
routes.post('/authuser', userController.authUser);


export default routes;
