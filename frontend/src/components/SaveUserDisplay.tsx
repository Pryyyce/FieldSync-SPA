import React, { useContext } from "react";
import { useUsersContext,UsersContext } from "../context/UsersContext";
import User from "../Interfaces";
import UserInfoCard from "./UserInfoCard";
import SaveUserButton from "./SaveUserButton";

export default function UserDisplay() {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3001/";
    const { users} = useUsersContext();  
    return (
        <>
            
            {users.map((user) => (
                <div key={user.id}>
                <UserInfoCard user={user}/>
                <SaveUserButton user={user} url={`${apiUrl}users/saved/${user.id}`}/>
                </div>
            ))}
        </>
    );
};