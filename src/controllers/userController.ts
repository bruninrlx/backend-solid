import {Request, Response} from 'express';
import CreateUserService from '../services/createUserService';

export default class ProductsController{
  public async create(request: Request, response : Response): Promise<Response>{

    try {
      const { name, email, password } = request.body;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({
        name,
        email,
        password,
      });

      return response.json(user);
    } catch(err) {
      return response.status(400).json({error: err.message});
    }
  }
}
