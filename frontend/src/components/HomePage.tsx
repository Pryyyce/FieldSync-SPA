import React, { useEffect, useState } from 'react';
import FetchButton from './FetchButton';
import DownloadButton from './DownloadButton';
import UserDisplay from './UserDisplay';
import {useUsersContext} from '../context/UsersContext';
const HomePage: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const { users} = useUsersContext(); 
    
    return (
        <>
        
            <h1>Home Page</h1>
            <DownloadButton />
            <UserDisplay users={users}/>
        </>
    );
};

export default HomePage;