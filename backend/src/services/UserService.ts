import {inject,injectable} from 'inversify';

import {Request} from 'express';
import UserRepository from '../repository/UserRepository';
import {UserEntity} from '../entities/UserEntity';

 class UserService {

    private userRepository: UserRepository;
    constructor(userRepository:UserRepository) {
        this.userRepository = userRepository;
    }

    async createUser(req: any): Promise<any> {
        console.log('Creating userAGAIN:', req.body);
        return this.userRepository.createUser(req);
    }
    async getUsers(): Promise<UserEntity []| null> {
        return this.userRepository.getUsers();}}

export default UserService;