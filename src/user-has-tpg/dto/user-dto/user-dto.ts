import { Tpg } from 'src/user-has-tpg/interface/ITpg';

export class UserDto {
  id: string;
  idk: string;
  satuan: string;
  fullname: string;
  username: string;
  password: string;
  tpg: Tpg[];
}
