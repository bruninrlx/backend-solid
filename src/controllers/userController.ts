import {Request, Response} from 'express';
import CreateUserService from '../services/createUserService';
import AuthenticateUserService from '../services/authenticateUserService';

export default class ProductsController{
  public async createUser(request: Request, response : Response): Promise<Response>{

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

  public async authUser(request: Request, response: Response): Promise<Response>{

    try {
      const { email, password } = request.body;

      const authenticateUser = new AuthenticateUserService();

      const { user, token } = await authenticateUser.execute({
        email,
        password
      });

      return response.json({ user, token });
    } catch(err){
      return response.status(400).json({ err: err.message});
    }
  }
}
