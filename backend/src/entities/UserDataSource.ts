import { DataSource } from "typeorm"
import { UserEntity } from "./UserEntity";

const UserDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "user",
    password: "password",
    database: "usersDatabase",
    synchronize: true,
    entities: [UserEntity],
    
});

UserDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
export default UserDataSource;
