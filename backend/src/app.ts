import express from 'express';
import { json } from 'body-parser';
import connectDB from "./repository/database";
import { Router } from 'express';
import cors from 'cors';
import UserRepository from './repository/UserRepository';
import UserController from './controllers/userController';
import UserService from './services/UserService';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: process.env.FRONTEND_APP_API_URL || 'http://localhost:3000',
    optionsSuccessStatus: 200
}));
app.use(json());
//start up repository layer
connectDB();

//service controller repository paradigm, top level only talks to controller
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const router = Router();
app.use('/users/saved', router);
router.post('/:id', (req,res) => userController.createUser(req,res));
router.get('/', (req,res) => userController.getUsers(req,res));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});