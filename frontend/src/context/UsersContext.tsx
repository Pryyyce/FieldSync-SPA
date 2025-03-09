import React, { createContext, useContext } from "react";

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    geo: Geo;
    phone: string;
    website: string;
    company: Company;
    
}

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