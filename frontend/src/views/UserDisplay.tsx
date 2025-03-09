import React from "react";
import UserInfoCard from "../components/UserInfoCard";
import User from "../data/Interfaces";
import "./UserDisplay.css";
interface UserDisplayProps {
    users: User[];
}

export default function UserDisplay({ users }: UserDisplayProps) {
    return (
        <div className="users-container">
            {users.length === 0 && <p className = "no-users">No users found.</p>}
            {users.map((user) => (
                <UserInfoCard key={user.id} user={user} />
            ))}
        </div>
    );
}