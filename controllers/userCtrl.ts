import express from 'express';
import UserModel from '../model/userModel';
import { UserValidation } from '../model/userModel';

export async function register(req: express.Request, res: express.Response) {
    try {
        const { email, password } = req.body;
        if (!email) throw new Error("Couldn't get email from body");
        if (!password) throw new Error("Couldn't get password from body");
        const { error } = UserValidation.validate({ email, password });
        if (error) throw error;

        const user = new UserModel({ email, password });
        await user.save();
        res.send({ register: true });
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function login(req: express.Request, res: express.Response) {
    try {
        const { email, password } = req.body;
        if (!email) throw new Error("Couldn't get email from body");
        if (!password) throw new Error("Couldn't get password from body");
        const { error } = UserValidation.validate({ email, password });
        if(error) throw error;

        const user = await UserModel.findOne({ email, password });
        if(!user) {
            res.send({ login: false});
        } else {
            res.send({ login: true});
        }
    } catch (error) {
        res.send({ error: error.message });
    }
}