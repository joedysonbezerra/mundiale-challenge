import { Router } from 'express';

import ProductsController from './app/controllers/ProductsController';
import log from './app/middlewares/log';
import ProductsIndex from './app/validators/ProductsIndex';

const productsController = new ProductsController();

const router = Router();

router.use(log);

router.post('/products', ProductsIndex, productsController.index);

export default router;
