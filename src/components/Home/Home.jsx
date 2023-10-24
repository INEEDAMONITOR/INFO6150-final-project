import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './gg.css';
import './Home.css';
const Home = ({ setPage, setUuid }) => {
    useEffect(() => {
        document.title = 'Valorant Database - Home';
    }, []);
    setUuid(null);
    return (
        <div className="home">
            <div className="home-card">
                <div className="home-card__icon-wrapper">
                    <i className="gg-profile" aria-label="Agents Icon" />
                </div>
                <div className="home-card__content-wrapper">
                    <label>Agents</label>
                    <p>
                        Valorant playable agents information. It also has the
                        agents' roles, skills.
                    </p>

                    <button
                        onClick={() => {
                            setPage('Agents');
                        }}
                    >
                        Check Agents
                    </button>
                </div>
            </div>

            <div className="home-card">
                <div className="home-card__icon-wrapper">
                    <i className="gg-smartphone-chip" aria-label="Gears Icon" />
                </div>
                <div className="home-card__content-wrapper">
                    <label>Gears</label>
                    <p>
                        Show the armors information in Valorant. It has armors'
                        name and price.
                    </p>
                    <button
                        onClick={() => {
                            setPage('Gears');
                        }}
                    >
                        Check Gears
                    </button>
                </div>
            </div>

            <div className="home-card">
                <div className="home-card__icon-wrapper">
                    <i className="gg-bmw" aria-label="Weapons Icon" />
                </div>
                <div className="home-card__content-wrapper">
                    <label>Weapons</label>
                    <p>
                        Show weapons information in Valorant. It has weapons'
                        name, fire rate, magazine size, etc...
                    </p>
                    <button
                        onClick={() => {
                            setPage('Weapons');
                        }}
                    >
                        Check Weapons
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
