import { IsString, IsAlphanumeric, IsOptional } from 'class-validator';

export class UpdateUserDto{
    @IsString()
    @IsOptional()
    first_name?: string;

    @IsString()
    @IsOptional()
    last_name?: string;

    @IsString()
    @IsOptional()
    user_name?: string;
    
    @IsAlphanumeric()
    @IsOptional()
    password?: string;

    @IsAlphanumeric()
    @IsOptional()
    email?: string;
}