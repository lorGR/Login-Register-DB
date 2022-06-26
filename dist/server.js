"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.port || 3000;
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
mongoose_1.default.connect('mongodb+srv://Lior:Iz9Wr7PZQF91rlCe@cluster0.xfjftjk.mongodb.net/UserDB?retryWrites=true&w=majority')
    .then(() => {
    console.log(`Connected To DB`);
})
    .catch(err => {
    console.error(err);
});
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
app.use('/users', userRoutes_1.default);
app.listen(port, () => {
    console.log(`server is running`);
});
