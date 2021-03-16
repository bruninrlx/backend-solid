import {Request, Response} from 'express';
import CreateProductService from '../services/createProductService';

export default class ProductsController{
  public async create(request: Request, response : Response): Promise<Response>{

    try {
      const { nameProduct, price, description, seller_id } = request.body;

      const createProductService = new CreateProductService();

      const product = await createProductService.execute({
        nameProduct,
        price,
        description,
        seller_id
      });

      return response.json(product);
    } catch(err) {
      return response.status(400).json({error: err.message});
    }
  }
}

