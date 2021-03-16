import { EntityRepository, Repository } from 'typeorm';

import User from '../entities/user';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

@EntityRepository(User)
class UserRepository extends Repository<User>{
  public async createUser({name,email,password}:ICreateUserDTO): Promise<User>{
    const user = this.create({name,email,password});

    await this.save(user);

    return user;
  }

  public async findByEmail(email:string): Promise<User | undefined> {
    const user = await this.findOne({
      where: { email }
    })

    return user
  }
}

export default UserRepository;
