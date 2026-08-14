import { useEffect, useState } from "react";

import ArtisanCard from "../../components/ArtisanCard/artisancard";
import SearchBar from "../../components/SearchBar/searchbar";
import rooferImage from "../../assets/images/bluelightpictures-roofers-2891664.png";

import "./home.scss";

function Home() {
    const [topArtisans, setTopArtisans] = useState([]);

    useEffect(() => {
        async function fetchTopArtisans() {
            try {
                const response = await fetch(
                    "http://localhost:3000/artisans?top=true"
                );

                if (!response.ok) {
                    throw new Error(
                        "La récupération des artisans du mois a échoué."
                    );
                }

                const resultat = await response.json();

                setTopArtisans(resultat);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des artisans du mois :",
                    error
                );
            }
        }

        fetchTopArtisans();
    }, []);

    useEffect(() => {
        document.title = "Trouve ton artisan - Accueil";

        const description =
            document.querySelector('meta[name="description"]');

        if (description) {
            description.setAttribute(
                "content",
                "Trouvez facilement un artisan en Auvergne-Rhône-Alpes et contactez-le directement."
            );
        }
    }, []);

    return (
        <main className="home">
            <div className="home_mobile-search">
                <SearchBar />
            </div>

            <section className="home_how-to">
                <div className="home_how-to-content">
                    <h1>Comment trouver un artisan ?</h1>

                    <ol>
                        <li>
                            Choisir la catégorie d’artisanat dans le menu
                        </li>
                        <li>Choisir un artisan</li>
                        <li>
                            Le contacter via le formulaire de contact
                        </li>
                        <li>
                            Une réponse sera apportée sous 48h
                        </li>
                    </ol>
                </div>

                <div className="home_how-to-image">
                    {<img
                        src={rooferImage}
                        alt="Artisan couvreur travaillant sur une toiture"
                    />}
                </div>
            </section>

            <section className="home_top">
                <h2>Nos artisans du mois :</h2>

                <div className="home_top-cards">
                    {topArtisans.map((artisan) => (
                        <ArtisanCard
                            key={artisan.id_artisan}
                            artisan={artisan}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;