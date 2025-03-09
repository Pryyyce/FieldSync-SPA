import {Outlet} from 'react-router-dom';
import React from 'react';
import { UsersContext } from './UsersContext';
import User from "../data/Interfaces";

const UsersContextWrapper = () =>
{
    const [downloadedUsers, setDownloadedUsers] = React.useState<User[]>([]);
    return (
            <UsersContext.Provider value={{users:downloadedUsers,setUsers:setDownloadedUsers}}> 
            <Outlet />
            </UsersContext.Provider>
    );
}
export default UsersContextWrapper;