import './Footer.css';
function Footer() {
    return (
        <div className="footer">
            <ul className="footer__list footer__social">
                <strong>Game</strong>
                <li>
                    <a
                        href="https://playvalorant.com/en-us/"
                        className="footer__link"
                    >
                        Valorant Official Website
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.riotgames.com/en"
                        className="footer__link"
                    >
                        Roit Games
                    </a>
                </li>
            </ul>

            <ul className="footer__list footer__cats">
                <strong>Developers</strong>
                <li>
                    <a
                        href="https://developer.riotgames.com/apis#val-content-v1"
                        className="footer__link"
                    >
                        Valorant API
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.riotgames.com/terms#license"
                        className="footer__link"
                    >
                        Under this License Uses
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.riotgames.com/en/legal"
                        className="footer__link"
                    >
                        Under Riot Games' "Legal Jibber Jabber"
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
