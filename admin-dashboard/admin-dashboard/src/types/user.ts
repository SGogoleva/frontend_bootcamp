export type User = {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  birth_date: string;
  phone: string;
  email: string;
  password: string;
};

export type CreateUser = Omit<User, 'id'>;

export type UserLogin = Pick<User, 'email' | 'password'>;