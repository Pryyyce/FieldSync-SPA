
import { get } from 'http';
import {UserEntity} from '../entities/UserEntity';
import { Repository } from 'typeorm';
import UserDataSource from '../entities/UserDataSource';



class UserRepository {
    
    private userDataBase: Repository<UserEntity>;
    constructor(){
        this.userDataBase = UserDataSource.getRepository(UserEntity);
    }

    async createUser(user: any): Promise<any> {
        try {
            const newUser = this.userDataBase.create(user);
            const res =  await this.userDataBase.save(newUser);
            return res;
        } catch (error) {
            console.error('Error executing query:', error);
            return error;
        }
    }

    async getUsers(): Promise<any> {
        try {
            const users = await this.userDataBase.find();
            return users;
        } catch (error) {
            console.error('Error executing query:', error);
            return error;
        }
    }
}

export default UserRepository;