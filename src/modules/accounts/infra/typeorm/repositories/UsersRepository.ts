import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICreatedUserDTO } from "@modules/accounts/dtos/ICreatedUserDTO";

class UsersRepository implements IUsersRepository {
  
  private repository: Repository<User>;
  
  constructor(){
    this.repository = getRepository(User);
  }
 
  async create({
    name, 
    email, 
    password, 
    driver_license,
    avatar,
    id
  }: ICreatedUserDTO): Promise<void> {
    
    const user = this.repository.create({
      name,      
      email,
      password,
      driver_license,
      avatar,
      id
    });
    
    await this.repository.save(user);        
  
  }
  
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({email});
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
 
}

export { UsersRepository }