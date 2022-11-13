import { Account } from '@/domain/entities';

describe('Account Entity', () => {
  let sut: Account;
  let entityInit: Account.AccountData;

  beforeAll(() => {
    entityInit = {
      firstName: 'John',
      lastName: 'Doe',
      birthDate: new Date().toISOString(),
      email: 'johndoe@mail.com',
      password: '123456',
    };
  });

  beforeEach(() => {
    sut = new Account(entityInit);
  });

  it('should create an entity instance with success', () => {
    expect(sut).toBeInstanceOf(Account);
  });

  it('should create a account entity with correct values', () => {
    expect(sut).toEqual(entityInit);
  });

  it('should return the public schema', () => {
    const publicSchema = sut.toPublic();

    expect(publicSchema).not.toHaveProperty('password');
  });
});
