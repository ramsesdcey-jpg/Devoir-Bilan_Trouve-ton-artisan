import { Link } from "react-router-dom";

import "./footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_content">
                <div className="footer_brand">
                    <p className="footer_logo">
                        Trouve ton artisan !
                    </p>

                    <p>
                        Avec la région
                        <br />
                        Auvergne-Rhône-Alpes
                    </p>
                </div>

                <address className="footer_address">
                    101 cours Charlemagne
                    <br />
                    CS 20033
                    <br />
                    69269 LYON CEDEX 02
                    <br />
                    France
                    <br />
                    +33 (0)4 26 73 40 00
                </address>
            </div>

            <nav
                className="footer_navigation"
                aria-label="Navigation légale"
            >
                <Link to="/mentions-legales">
                    Mentions légales
                </Link>

                <Link to="/donnees-personnelles">
                    Données personnelles
                </Link>

                <Link to="/accessibilite">
                    Accessibilité
                </Link>

                <Link to="/contact">
                    Contact
                </Link>

                <Link to="/cookies">
                    Politique des cookies
                </Link>
            </nav>
        </footer>
    );
}

export default Footer;