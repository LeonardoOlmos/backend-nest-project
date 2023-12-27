import { IsString, IsAlphanumeric } from 'class-validator';
import { IUser } from '../interface/user.interface';

export class CreateUserDto implements IUser{
    @IsString()
    first_name!: string;

    @IsString()
    last_name!: string;

    @IsString()
    user_name!: string;
    
    @IsAlphanumeric()
    password!: string;

    @IsAlphanumeric()
    email!: string;
}