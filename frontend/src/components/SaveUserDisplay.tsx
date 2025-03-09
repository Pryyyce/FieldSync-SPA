import React, { useContext } from "react";
import { useUsersContext,UsersContext, User } from "../context/UsersContext";
import UserInfoCard from "./UserInfoCard";
import SaveUserButton from "./SaveUserButton";

export default function UserDisplay() {
    const { users} = useUsersContext();  
    return (
        <>
            
            {users.map((user) => (
                <div key={user.id}>
                <UserInfoCard user={user}/>
                <SaveUserButton user={user} url={`users/${user.id}/save`}/>
                </div>
            ))}
        </>
    );
};