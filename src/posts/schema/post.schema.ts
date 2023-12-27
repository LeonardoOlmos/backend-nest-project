import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PostDocument = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post {
    @Prop({ type: String, required: true })
    user_id: string;

    @Prop({ type: String, required: true })
    category: string;

    @Prop({ type: String, required: true })
    title: string;

    @Prop({ type: String, required: true })
    content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post)