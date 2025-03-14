import { PartialClassUsers } from 'src/user-has-tpg/interface/IPartialClassUsers';
import { Tpg } from 'src/user-has-tpg/interface/ITpg';

export class TpgUsersDto implements PartialClassUsers {
  username: string;
  tpg: Tpg[];
}
