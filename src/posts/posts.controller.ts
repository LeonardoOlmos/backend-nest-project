import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

import { IPost } from './interface/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): Promise<IPost[]>{
    return this.postsService.getPosts();
  }

  @Post()
  createPost(@Body() postData: CreatePostDto): Promise<IPost>{
    return this.postsService.createPost(postData);
  }

  @Get('/:postId')
  getPost(@Param('postId') postId: string): Promise<IPost>{
    return this.postsService.getPostById(postId);
  }

  @Put('/:postId')
  updatePost(@Param('postId') postId: string, @Body() postData: UpdatePostDto): Promise<IPost>{
    return this.postsService.updatePost(postId, postData);
  }

  @Delete('/:postId')
  deletePost(@Param('postId') postId: string): Promise<IPost>{
    return this.postsService.deletePost(postId);
  }

  @Get('/user/:userId')
  getPostsByUser(@Param('userId') userId: string): Promise<IPost[]>{
    return this.postsService.getPostsByUser(userId);
  }
}
