import { UserDto } from '../dto/user-dto/user-dto';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PartialClassUsers
  extends Omit<UserDto, 'idk' | 'satuan' | 'fullname' | 'password' | 'id'> {}
