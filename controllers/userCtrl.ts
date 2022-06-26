import express from 'express';
import UserModel from '../model/userModel';

export async function register(req: express.Request, res: express.Response) {
    try {
        const { email, password } = req.body;
        if (!email) throw new Error("Couldn't get email from body");
        if (!password) throw new Error("Couldn't get password from body");
        const user = new UserModel({email , password });
        await user.save();
        res.send({ user });
    } catch (error) {
        res.send({ error: error.message });
    }
}