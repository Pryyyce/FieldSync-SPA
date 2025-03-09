import React, { useContext } from "react";
import { useUsersContext,UsersContext } from "../context/UsersContext";
import UserInfoCard from "../components/UserInfoCard";
import SaveUserButton from "../controllers/SaveUserButton";
import './UserDisplay.css';

export default function SaveUserDisplay() {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3001/";
    const { users} = useUsersContext();  
    return (
        <div className="users-container">
            {users.length === 0 && <p className = "no-users">No users found.</p>}
            
            {users.map((user) => (
                <div key={user.id}>
                <UserInfoCard user={user}/>
                <SaveUserButton user={user} url={`${apiUrl}users/saved/${user.id}`}/>
                </div>
            ))}
        </div>
    );
};