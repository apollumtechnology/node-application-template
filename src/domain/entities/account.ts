export namespace Account {
  export type AccountPublic = {
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
  }

  export type AccountData = {
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
    password: string;
  }
}

export class Account {
  private firstName: string;

  private lastName: string;

  private birthDate: string;

  private email: string;

  private password: string;

  constructor(init: Account.AccountData) {
    this.firstName = init.firstName;
    this.lastName = init.lastName;
    this.birthDate = init.birthDate;
    this.email = init.email;
    this.password = init.password;
  }

  public toPublic(): Account.AccountPublic {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      email: this.email,
    };
  }
}
