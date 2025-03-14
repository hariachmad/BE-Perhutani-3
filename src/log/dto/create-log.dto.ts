import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateLogDto {
  @IsString()
  @IsNotEmpty()
  event: string;
}
