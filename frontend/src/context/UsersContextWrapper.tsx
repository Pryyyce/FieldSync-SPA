import {Outlet} from 'react-router-dom';
import React from 'react';
import { User,UsersContext } from './UsersContext';
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