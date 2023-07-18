import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
export class AddressDTO {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsString()
  @IsOptional()
  country: string;
}

export class BodyDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  number: number;

  @ValidateNested()
  @Type(() => AddressDTO)
  address: AddressDTO;
}
