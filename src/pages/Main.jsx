import React, {useState} from 'react';
import AgentInfo from '../components/Agents/AgentInfo';
import Home from '../components/Home/Home';
import Agents from './Agents';
import Gears from './Gears';
import Subscribe from './Subscribe';
import Weapons from './Weapons';
const Main = ({className, page, changePage, setPage}) => {
    const [uuid, setUuid] = useState(null);
    return (
        <div className={className}>
            {page === 'Home' && (
                <Home
                    setPage={setPage}
                    changePage={changePage}
                    setUuid={setUuid}
                />
            )}
            {page === 'Agents' && (
                <Agents setPage={setPage} setUuid={setUuid} />
            )}
            {page === 'Gears' && <Gears setUuid={setUuid} />}
            {page === 'Weapons' && <Weapons setUuid={setUuid} />}
            {page === 'Subscribe' && <Subscribe setUuid={setUuid} />}
            {page === 'AgentInfo' && uuid && <AgentInfo uuid={uuid} />}
        </div>
    );
};

export default Main;
