import { IsString } from 'class-validator';
import { IPost } from '../interface/post.interface';

export class CreatePostDto implements IPost{
    @IsString()
    user_id!: string;

    @IsString()
    category!: string;

    @IsString()
    title!: string;

    @IsString()
    content!: string;
}