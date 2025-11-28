import { model, Schema } from "mongoose";




//create schema:
const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
})

const ContentSchema = new Schema({

})

//create and export Model:
export const UserModel = model("users", UserSchema);

