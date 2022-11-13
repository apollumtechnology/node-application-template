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
}

describe('Account Entity', () => {
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

  it('should create an entity instance with success', () => {
    const sut = new Account(entityInit);

    expect(sut).toBeInstanceOf(Account);
  });
});
