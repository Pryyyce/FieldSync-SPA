import React, { useEffect, useState } from 'react';
import FetchButton from './FetchButton';
import DownloadButton from './DownloadButton';
import UserDisplay from './UserDisplay';

const HomePage: React.FC = () => {
    const [data, setData] = useState<any>(null);

    return (
        <>
        
            <h1>Home Page</h1>
            <DownloadButton />
            <UserDisplay />
        </>
    );
};

export default HomePage;