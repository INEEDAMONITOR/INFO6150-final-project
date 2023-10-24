import React, {useEffect, useState} from 'react';
import './GearsList.css';

const GearsList = () => {
    const [gears, setGears] = useState();
    useEffect(() => {
        fetch('https://valorant-api.com/v1/gear', {
            method: 'GET',
        }).then(res => {
            res.json().then(data => {
                setGears(data.data);
            });
        });
    });
    return (
        <div className="gears-root">
            {gears?.map(item => {
                return (
                    <div className="gears-item" key={item.uuid}>
                        <h1>{item.displayName}</h1>
                        <img src={item.displayIcon} alt="Gears" />
                        <p>{item.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default GearsList;
