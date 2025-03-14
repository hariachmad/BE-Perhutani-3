import { ITpg } from '../interface/ITpg';

export class CreateTpgDto implements ITpg {
  jenisTpg: string;
  kodeTpg: string;
  namaTpg: string;
}
