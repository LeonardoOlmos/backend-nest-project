import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schema/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post.name)
        private readonly postModule = Model<Post>,
    ){}

    async getPosts(): Promise<Post[]> {
        return this.postModule.find().lean();
    }

    async getPostById(postId: string): Promise<Post> {
        return this.postModule.findById({ _id: postId }).lean();
    }

    async createPost(post: CreatePostDto): Promise<Post> {
        const newPost = new this.postModule(post);

        return newPost.save();
    }

    async updatePost(postId: string, postData: UpdatePostDto): Promise<Post> {
        return this.postModule.updateOne({ _id: postId}, postData).lean();
    }

    async deletePost(postId: string): Promise<Post> {
        return this.postModule.deleteOne({ _id: postId }).lean();
    }

    async getPostsByUser(userId: string): Promise<Post[]> {
        return this.postModule.find({ user_id: userId }).lean();
    }
}
