import React from "react";
import UserInfoCard from "./UserInfoCard";
import { User } from "../context/UsersContext";

interface UserDisplayProps {
    users: User[];
}

export default function UserDisplay({ users }: UserDisplayProps) {
    return (
        <>
            {users.map((user) => (
                <UserInfoCard key={user.id} user={user} />
            ))}
        </>
    );
}