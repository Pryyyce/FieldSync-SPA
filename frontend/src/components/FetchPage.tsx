import React from "react";
import { useState } from "react";
import UserDisplay from "./UserDisplay";
import { useUsersContext, UsersContext, User } from "../context/UsersContext";
import FetchButton from "./FetchButton";
export default function FetchPage() {
    const [users, setUsers] = useState<User[]>([]);

    async function fetchUsers(url: string) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }
    
    return (
        <>
            <h1>FetchPage</h1>
            <FetchButton buttonName="get Users from backend!"tryFetch={fetchUsers} url="users/saved/"/>
            <UserDisplay users={users}/>
        </>
    );
}