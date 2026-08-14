import { useState } from "react";

import Logo from "../Logo/logo";
import SearchBar from "../SearchBar/searchbar";
import Navigation from "../Navigation/navigation";

import "./header.scss";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="header">
            <div className="header_top">
                <Logo />

                <SearchBar />

                <button
                    className={`header_burger ${
                        menuOpen ? "header_burger--open" : ""
                    }`}
                    type="button"
                    onClick={toggleMenu}
                    aria-label={
                        menuOpen
                            ? "Fermer le menu"
                            : "Ouvrir le menu"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div
                className={`header_navigation ${
                    menuOpen ? "header_navigation--open" : ""
                }`}
            >
                <Navigation onLinkClick={closeMenu} />
            </div>
        </header>
    );
}

export default Header;