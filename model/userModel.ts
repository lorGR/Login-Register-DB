import mongoose from "mongoose";
import joi from "joi";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;

export const UserValidation = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required().min(6)
}) 

