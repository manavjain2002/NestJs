import {
  IsString,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
export class PermissionDTO {
  @IsString()
  @IsNotEmpty()
  person: string;

  @IsString()
  @IsNotEmpty()
  permit: string;
}

export class NotesDTO {
  @IsString()
  @IsOptional()
  createdBy: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  note: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => PermissionDTO)
  permission: PermissionDTO[];
}
