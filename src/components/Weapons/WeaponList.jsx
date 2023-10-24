import React, {useEffect, useState} from 'react';
import WeaponCard from './WeaponCard';
// import weapons from '../../context/Weapons';
const WeaponList = () => {
    const [weapons, setWeapons] = useState();
    useEffect(() => {
        fetch('https://valorant-api.com/v1/weapons', {
            method: 'GET',
        }).then(res => {
            res.json().then(data => {
                setWeapons(data.data);
            });
        });
    });
    return <WeaponCard weapons={weapons} />;
};

export default WeaponList;
