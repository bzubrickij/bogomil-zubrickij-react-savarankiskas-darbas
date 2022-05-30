import axios from 'axios';
import { Credentials, TemporaryUser } from '../../../types/global-types';
import { User } from '../../../types/global-types/user';

export type AuthPromise = (credential: Credentials) => Promise<User>;

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace AuthService {

  export const login: AuthPromise = async ({ email, password }: Credentials): Promise<User> => {
    const { data: tempUsers } = await axios.get<TemporaryUser[]>(`http://localhost:3003/users?email=${email}`);
    if (tempUsers.length === 0) {
      throw new Error('I don\'t know you, go away!');
    }

    const [tempUser] = tempUsers;

    if (tempUser.password !== password) {
      throw new Error('Passwords no match\'e match\'e');
    }

    return {
      id: tempUser.id,
      name: tempUser.name,
      surname: tempUser.surname,
      email: tempUser.email,
    };
  };

  export const register: AuthPromise = async ({ email, password }: Credentials) => {
    const { data: tempUsers } = await axios.get<TemporaryUser[]>('http://localhost:3004/users');

    const userExists = tempUsers.map((x) => x.email).includes(email);
    if (userExists) {
      throw new Error('Toks vartotojas jau egzistuoja. Pasirinkite kitą el. paštą');
    }

    const { data: createdTempUser } = await axios.post('http://localhost:3004/users', { email, password });

    const createdUser: User = {
      id: createdTempUser.id,
      email: createdTempUser.email,
    };

    return createdUser;
  };
}

export default AuthService;
