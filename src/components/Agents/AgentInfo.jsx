import {useEffect, useState} from 'react';
import './AgentInfo.css';
const AgentInfo = ({uuid}) => {
    const [agentInfo, setAgentInfo] = useState();

    useEffect(() => {
        document.title = `Valorant Database - Agent Info`;
        fetch(`https://valorant-api.com/v1/agents/${uuid}`, {
            method: 'GET',
        }).then(res => {
            res.json().then(data => {
                setAgentInfo(data.data);
            });
        });
    }, [uuid]);

    return (
        <div className="agent-display-pane">
            <div>
                <img
                    className="full-size-img"
                    src={agentInfo?.fullPortrait}
                    alt={`${agentInfo?.displayName} full portrait`}
                />
            </div>
            <div className="agent-info-card-root">
                <div className="description-card">
                    <h1>
                        <img
                            className="role-icon"
                            src={agentInfo?.role.displayIcon}
                            alt={`${agentInfo?.role.displayName} role icon`}
                        />
                        {'    '}
                        {agentInfo?.displayName}
                    </h1>
                    <p>
                        <strong>Role:</strong> {agentInfo?.role.displayName}
                    </p>
                    <p>{agentInfo?.description}</p>
                </div>

                {agentInfo?.abilities.map(item => {
                    return (
                        <div className="ability-card" key={item.displayName}>
                            <h3>{item.displayName}</h3>
                            <img
                                src={item.displayIcon}
                                alt={`${agentInfo?.displayName} ability ${item.displayName} icon`}
                            />
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AgentInfo;
