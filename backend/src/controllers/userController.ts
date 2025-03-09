import {Request, Response} from 'express';

import UserService from '../services/UserService';


class UserController {
    private userService: UserService;
    constructor(userService: UserService) {
        this.userService = userService;
    }
    
    async createUser(req: Request, res: Response) {
        try {
            await this.userService.createUser(req.body);
            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getUsers(req: Request, res: Response) {
        try {
            const users = await this.userService.getUsers();
            res.status(200).json(users); 
        } catch (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default UserController;