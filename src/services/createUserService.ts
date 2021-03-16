import { hash } from 'bcryptjs'
import { getCustomRepository } from 'typeorm';
import User from '../entities/user';
import UserRepository from '../repositories/userRepositories'
interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password}: IRequest): Promise<User>{
    const userRepositories = getCustomRepository(UserRepository)

    const checkUserExists = await userRepositories.findByEmail(email);

    if(checkUserExists){
      throw new Error('Email addres already used.');
    }

    const hashedPassword = await(hash(password, 8))

    const user = await userRepositories.createUser({
      name,
      email,
      password: hashedPassword
    })

    return user;
  }
}

export default CreateUserService

