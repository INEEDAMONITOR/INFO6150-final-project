import './Header.css';
import './gg.css';
import {useState} from 'react';
import logo from '../../images/valorant_logo.png';
import routerPath from '../../routerPath';
function Header({changePage}) {
    const [showNav, setShowNav] = useState(false);
    const navList = routerPath.map(item => {
        if (item.name !== 'AgentInfo')
            return (
                <li className="nav__item" key={item.path + 'nav'}>
                    <a
                        onClick={changePage}
                        className="nav__link"
                        href={item.path}
                    >
                        {item.name}
                    </a>
                </li>
            );
        else {
            return null;
        }
    });

    return (
        <div>
            <div className="header">
                <div>
                    <img className="logo" src={logo} alt="valorant logo" />
                </div>
                <h1>VALORANT DATABASE</h1>
                <button
                    className="nav__button"
                    onClick={() => {
                        setShowNav(!showNav);
                    }}
                >
                    <i className="gg-menu" aria-label="Show menu button"></i>
                </button>
            </div>
            <div className={`nav__bar ${showNav ? 'nav__bar--open' : ''}`}>
                <ul className="nav__list">{navList}</ul>
            </div>
        </div>
    );
}
export default Header;
