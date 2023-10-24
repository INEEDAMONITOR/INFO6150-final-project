import React from 'react';
import { useEffect } from 'react';
import SubscribeList from '../components/Subscribe/SubscribeList';
const Subscribe = () => {
    useEffect(() => {
        document.title = 'Valorant Database - Home';
    }, []);
    return (
        <>
            <SubscribeList />
        </>
    );
};

export default Subscribe;
