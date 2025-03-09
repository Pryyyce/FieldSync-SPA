import {Request, Response} from 'express';

import {inject, injectable} from 'inversify';
import UserService from '../services/UserService';


class UserController {
    private userService: UserService;
    constructor(userService: UserService) {
        this.userService = userService;
    }
    
    async createUser(req: Request) {
        console.log('Creating user:', req.body);
        try {
            console.log('testing userService')
            const user = req.body;
            console.log('testing userService2')
            //console.log('userService', this.userService);
            await this.userService.createUser(user);
            
        } catch (error) {
            console.error('Error executing query:', error);
            
        }
    }

    async getUsers(req: Request, res: Response) {
        // Logic to get a user by ID
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