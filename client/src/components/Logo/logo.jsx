import logo from "../../assets/images/Logo.png";
import "./logo.scss";

function Logo() {
    return (
        <a className="logo" href="/">
            <img
                className="logo_image"
                src={logo}
                alt="Trouve ton artisan — Retour à l’accueil"
            />
        </a>
    );
}

export default Logo;