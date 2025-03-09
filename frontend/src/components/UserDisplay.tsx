import React, { useContext } from "react";
import { useUsersContext,UsersContext, User } from "../context/UsersContext";
import UserInfoCard from "./UserInfoCard";


export default function UserDisplay() {
    const { users} = useUsersContext();  
    return (
        <>
            
            {users.map((user) => (
                <UserInfoCard key={user.id} user={user}/>
            ))}
        </>
    );
};