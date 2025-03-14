import { IUser } from 'src/users/interface/IUser';

export class CreateUsersDto implements IUser {
  id: string;
  idk?: string;
  satuan?: string;
  fullname?: string;
  username?: string;
  password?: string;
  tpg?: any;
}
