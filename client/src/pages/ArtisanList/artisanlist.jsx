import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ArtisanCard from "../../components/ArtisanCard/artisancard";
import "./artisanlist.scss";

function ArtisanList() {
    const [artisans, setArtisans] = useState([]);
    const [searchParams] = useSearchParams();
    
    const nom = searchParams.get("nom");
    const categorie = searchParams.get("categorie");

    useEffect(() => {
        async function fetchArtisans() {
            try {
                const apiParams = new URLSearchParams();

                if (categorie) {
                    apiParams.set("categorie", categorie);
                }

                if (nom) {
                    apiParams.set("nom", nom);
                }

                const queryString = apiParams.toString();

                const url = queryString
                    ? `http://localhost:3000/artisans?${queryString}`
                    : "http://localhost:3000/artisans";

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(
                        "La récupération des artisans a échoué."
                    );
                }

                const results = await response.json();

                setArtisans(results);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des artisans :",
                    error
                );
            }
        }

        fetchArtisans();
    }, [categorie, nom]);

    useEffect(() => {
        document.title = "Trouve ton artisan - Liste des artisans";

        const description =
            document.querySelector('meta[name="description"]');

        if (description) {
            description.setAttribute(
                "content",
                "Consultez la liste des artisans et filtrez-les par catégorie ou par nom."
            );
        }
    }, []);

    return (
        <main className="artisan-list">
            <section
                className="artisan-list_container"
                aria-label="Résultats des artisans"
            >
                {artisans.length === 0 ? (
                <p className="artisan-list_empty">
                    Aucun artisan ne correspond à votre recherche.
                </p>
            ) : (
                <div className="artisan-list_cards">
                    {artisans.map((artisan) => (
                        <ArtisanCard
                            key={artisan.id_artisan}
                            artisan={artisan}
                        />
                    ))}
                </div>
            )}
            </section>
        </main>
    );
}

export default ArtisanList;