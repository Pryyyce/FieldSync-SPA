import React, { createContext, useContext } from "react";
import  User  from "../data/Interfaces";

export interface UsersContextType {
    users: User[];
    setUsers: (users: User[]) => void;
}


export const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const useUsersContext = () =>  {
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error("useUsersContext must be used within a UsersProvider");
    }
    return context;
}