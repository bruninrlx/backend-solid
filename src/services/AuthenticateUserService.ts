import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../entities/user';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({email, password}: Request): Promise<Response> {
    const userRepositories = getRepository(User);

    const user = await userRepositories.findOne({where: { email } });

    if(!user){
      throw new Error('Incorret email/password combination. ');
    }

    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched) {
      throw new Error('Incorret email/password combination.');
    }

    const token = sign({}, '8251157e48ab72c5db7e5c005745bb28', {
      subject: user.id,
      expiresIn: '1d'
    });

    return {
      user,
      token
    };
  }
}

export default AuthenticateUserService;
