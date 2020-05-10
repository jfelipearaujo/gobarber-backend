import { uuid } from 'uuidv4';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(u => u.id === id);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(u => u.email === email);

    return user;
  }

  public async findAllProviders({
    expect_user_id,
  }: IFindAllProvidersDTO): Promise<User[]> {
    let { users } = this;

    if (expect_user_id) {
      users = this.users.filter(user => user.id !== expect_user_id);
    }

    return users;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(
      user,
      {
        id: uuid(),
      },
      data,
    );

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    const userIndex = this.users.findIndex(u => u.id === user.id);

    this.users[userIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;
