import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUploadDto {
  @IsString()
  @IsNotEmpty()
  readonly fileName: string;
}
