
import UserRepository from '../repository/UserRepository';

//service layer doesn't do much in this example, helps with scalability because logic for future api calls can be 
//handled by subbing out different services
 class UserService {

    private userRepository: UserRepository;
    constructor(userRepository:UserRepository) {
        this.userRepository = userRepository;
    }

    async createUser(req: any): Promise<any> {
        return this.userRepository.createUser(req);
    }
    async getUsers(): Promise<any> {
        return this.userRepository.getUsers();}}

export default UserService;