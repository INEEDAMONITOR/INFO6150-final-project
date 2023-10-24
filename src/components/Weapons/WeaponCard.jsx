import React from 'react';
import './WeaponCard.css';
import WeaponDemageRanges from './WeaponDemageRanges';
const WeaponCard = ({weapons, className}) => {
    return (
        <div className="weapon-card-root">
            {weapons?.map(item => {
                return (
                    <div className="weapon-card" key={item.uuid}>
                        <div className="weapon-card__basic-info">
                            <img
                                className="weapon-card__image"
                                src={item.displayIcon}
                                alt={`weapon ${item.displayName}`}
                            />

                            <h3 className="card__weapon-name">
                                {item.displayName}
                            </h3>
                            {item.displayName !== 'Melee' && (
                                <>
                                    <p>
                                        FireRate: {item.weaponStats?.fireRate}
                                    </p>
                                    <p>
                                        Magazine Size:{' '}
                                        {item.weaponStats?.magazineSize}
                                    </p>
                                    <p>
                                        Reload Time:{' '}
                                        {item.weaponStats?.reloadTimeSeconds}s
                                    </p>
                                    <p>Cost: {item.shopData?.cost}</p>
                                    <p>
                                        Magazine Size:{' '}
                                        {item.weaponStats?.magazineSize}
                                    </p>
                                    <p>Category: {item.shopData?.category}</p>
                                </>
                            )}
                        </div>
                        {item.displayName !== 'Melee' && (
                            <div className="weapon-demage-ranges__wrapper">
                                <div className="weapon-demage-ranges-boxes">
                                    <WeaponDemageRanges
                                        demageRanges={
                                            item.weaponStats?.damageRanges
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default WeaponCard;
