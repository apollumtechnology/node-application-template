type AccountPublic = {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
}

type AccountData = {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  password: string;
}

class Account {
  public firstName: string;

  public lastName: string;

  public birthDate: string;

  public email: string;

  private password: string;

  constructor(init: AccountData) {
    this.firstName = init.firstName;
    this.lastName = init.lastName;
    this.birthDate = init.birthDate;
    this.email = init.email;
    this.password = init.password;
  }

  public toPublic(): AccountPublic {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      email: this.email,
    };
  }
}

describe('Account Entity', () => {
  let sut: Account;
  let entityInit: AccountData;

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

  it('should return the public schema', () => {
    const publicSchema = sut.toPublic();

    expect(publicSchema).not.toHaveProperty('password');
  });
});
