import express from 'express';
import { json } from 'body-parser';
import connectDB from "./database";
import { Router } from 'express';
import cors from 'cors';
import UserRepository from './repository/UserRepository';
import UserController from './controllers/userController';
import UserService from './services/UserService';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(json());


connectDB();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const router = Router();
app.use('/users/saved', router);
router.post('/:id', (req,res) => userController.createUser(req));
router.get('/', (req,res) => userController.getUsers(req,res));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});