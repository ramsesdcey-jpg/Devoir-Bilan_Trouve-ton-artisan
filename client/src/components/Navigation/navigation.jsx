import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./navigation.scss";

function Navigation({ onLinkClick }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch(
                    "http://localhost:3000/categories"
                );

                if (!response.ok) {
                    throw new Error(
                        "La récupération des catégories a échoué."
                    );
                }

                const resultat = await response.json();

                setCategories(resultat);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des catégories :",
                    error
                );
            }
        }

        fetchCategories();
    }, []);

    return (
        <nav
            className="navigation"
            aria-label="Navigation principale"
        >
            <ul className="navigation_list">
                <li className="navigation_home">
                    <Link
                        className="navigation_link"
                        to="/"
                        onClick={onLinkClick}
                    >
                        Accueil
                    </Link>
                </li>

                {categories.map((categorie) => (
                    <li key={categorie.id_categorie}>
                        <Link
                            className="navigation_link"
                            to={`/artisans?categorie=${encodeURIComponent(
                                categorie.nom
                            )}`}
                            onClick={onLinkClick}
                        >
                            {categorie.nom}

                            <span
                                className="navigation_chevron"
                                aria-hidden="true"
                            >
                                ▼
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;