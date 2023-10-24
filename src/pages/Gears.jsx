import React from 'react';
import { useEffect } from 'react';
import GearsList from '../components/Gears/GearsList';
const Gears = () => {
    useEffect(() => {
        document.title = 'Valorant Database - Gears';
    }, []);
    return <GearsList />;
};

export default Gears;
