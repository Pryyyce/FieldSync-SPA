import React from "react";
import { useState } from "react";
import UserDisplay from "./UserDisplay";
import { useUsersContext, UsersContext } from "../context/UsersContext";
import User from "../Interfaces";
import FetchButton from "./FetchButton";

export default function FetchPage() {
    const baseApi = process.env.BACKEND_APP_API_URL || "http://localhost:3001/";
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
            <FetchButton buttonName="get Users from backend!"tryFetch={fetchUsers} url={`${baseApi}users/saved/`}/>
            <UserDisplay users={users}/>
        </>
    );
}