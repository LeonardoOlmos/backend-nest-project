import { IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
    @IsString()
    @IsOptional()
    category?: string;

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    content?: string;
}