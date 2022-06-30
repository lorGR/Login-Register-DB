import express from 'express';
import { register, login, getUser } from '../controllers/userCtrl';
const router: express.Router = express.Router();

router
    .post('/register', register)
    .post('/login', login)
    .post('/get-user', getUser)
export default router;