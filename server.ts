import express from 'express';
import mongoose from 'mongoose';
const app: express.Application = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
    'mongodb+srv://Lior:Iz9Wr7PZQF91rlCe@cluster0.xfjftjk.mongodb.net/UserDB?retryWrites=true&w=majority'
)
    .then(() => {
        console.log(`Connected To DB`);
    })
    .catch(err => {
        console.error(err);
    })

import userRoutes from './routes/userRoutes';
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`server is running`);
})