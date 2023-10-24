import WeaponList from '../components/Weapons/WeaponList';
import React from 'react';
import { useEffect } from 'react';
const Weapons = () => {
    useEffect(() => {
        document.title = 'Valorant Database - Weapons';
    }, []);
    return (
        <div>
            <WeaponList />
        </div>
    );
};

export default Weapons;
