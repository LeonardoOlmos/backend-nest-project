import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop({ type: String, requried: true})
    first_name: string;

    @Prop({ type: String, requried: true})
    last_name: string;

    @Prop({ type: String, requried: true})
    user_name: string;

    @Prop({ type: String, requried: true})
    password: string;

    @Prop({ type: String, requried: true})
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
