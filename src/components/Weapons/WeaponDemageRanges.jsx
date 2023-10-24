import React from 'react';
import './WeaponDemageRanges.css';
const WeaponDemageRanges = ({ demageRanges }) => {
    const list = demageRanges.map(item => {
        const id = item.rangeEndMeters * item.rangeStartMeters * item.legDamage;
        return (
            <div className="wdr-table" key={id}>
                <div className="wdr-column">
                    <h4>
                        {item.rangeStartMeters} - {item.rangeEndMeters}m
                    </h4>
                </div>
                <div className="wdr-column">
                    <h4>Head</h4>
                    <div>{parseFloat(item.headDamage).toFixed(2)}</div>

                    <h4>Body</h4>
                    <div>{parseFloat(item.bodyDamage).toFixed(2)}</div>

                    <h4>Leg</h4>
                    <div>{parseFloat(item.legDamage).toFixed(2)}</div>
                </div>
            </div>
        );
    });
    return <>{list}</>;
};

export default WeaponDemageRanges;
