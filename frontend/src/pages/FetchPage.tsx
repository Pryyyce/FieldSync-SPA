import React from "react";
import { useState } from "react";
import UserDisplay from "../views/UserDisplay";
import { useUsersContext, UsersContext } from "../context/UsersContext";
import User from "../data/Interfaces";
import FetchButton from "../controllers/FetchButton";
import "./FetchPage.css"; 

export default function FetchPage() {

    const baseApi = process.env.BACKEND_APP_API_URL || "http://localhost:3001/";
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    async function fetchUsers(url: string) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data);
            setError(null);
        } catch (error) {
            setError("Error fetching users: " + error);
            console.error("Error fetching users:", error);
        }
    }
    
    return (
        <div className="fetch-page">
            <h1 className = "page-title">FetchPage</h1>
            <FetchButton buttonName="get Users from backend!"tryFetch={fetchUsers} url={`${baseApi}users/saved/`}/>
            {!error && <UserDisplay users={users}/>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}