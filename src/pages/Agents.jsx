import React from 'react';
import AgentsList from '../components/Agents/AgentsList';
import { useEffect } from 'react';
const Agents = ({ setPage, setUuid }) => {
    useEffect(() => {
        document.title = 'Valorant Database - Home';
    }, []);
    return (
        <div>
            <AgentsList setPage={setPage} setUuid={setUuid} />
        </div>
    );
};

export default Agents;
