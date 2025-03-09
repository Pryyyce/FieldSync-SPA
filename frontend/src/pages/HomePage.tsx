import React, { useEffect, useState } from 'react';
import FetchButton from '../controllers/FetchButton';
import DownloadButton from '../controllers/DownloadButton';
import UserDisplay from '../views/UserDisplay';
import {useUsersContext} from '../context/UsersContext';
import "./HomePage.css"; 

const HomePage: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const { users} = useUsersContext(); 
    
    return (
        <div className="home-page">
        
            <h1 className="page-title">Home Page</h1>
            <DownloadButton />
            <UserDisplay users={users}/>
        </div>
    );
};

export default HomePage;