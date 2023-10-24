import React, {useEffect, useState} from 'react';
import './AgentsList.css';

const AgentsList = ({setPage, setUuid}) => {
    const [agents, setAgents] = useState();
    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true', {
            method: 'GET',
        }).then(res => {
            res.json().then(data => {
                setAgents(data.data);
            });
        });
    });

    return (
        <div className="agent-card-root">
            {agents?.map(item => {
                return (
                    <button
                        className="agent-card"
                        href={`/agents/info/${item.uuid}`}
                        key={item.uuid}
                        onClick={() => {
                            setPage('AgentInfo');
                            setUuid(item.uuid);
                        }}
                    >
                        <img
                            className="agent-card__image"
                            src={item.displayIconSmall}
                            alt={`${item.displayName} Icon`}
                        />
                        <div>
                            <strong>{item.displayName}</strong>
                        </div>
                    </button>
                );
            })}
        </div>
    );
};

export default AgentsList;
