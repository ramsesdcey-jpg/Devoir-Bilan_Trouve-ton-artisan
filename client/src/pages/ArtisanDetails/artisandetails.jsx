import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Rating from "../../components/Rating/rating";
import ContactForm from "../../components/ContactForm/contactform";
import hammerIcon from "../../assets/icons/hammer.svg";
import locationIcon from "../../assets/icons/geo-alt.svg";
import defaultProfile from "../../assets/images/default-logo.png";
import infoIcon from "../../assets/icons/info-circle.svg";

import "./artisandetails.scss";

function ArtisanDetails() {
    const { id } = useParams();

    const [artisan, setArtisan] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchArtisan() {
            try {
                const response = await fetch(
                    `http://localhost:3000/artisans/${id}`
                );

                const resultat = await response.json();

                if (!response.ok) {
                    throw new Error(
                        resultat.message ||
                            "Impossible de récupérer cet artisan."
                    );
                }

                setArtisan(resultat);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération de l'artisan :",
                    error
                );

                setError(error.message);
            }
        }

        fetchArtisan();
    }, [id]);

    useEffect(() => {
        if (!artisan) {
            return;
        }

        document.title = `Trouve ton artisan - ${artisan.nom}`;

        const description =
            document.querySelector('meta[name="description"]');

        if (description) {
            description.setAttribute(
                "content",
                `Découvrez la fiche de ${artisan.nom}, sa spécialité, sa localisation et ses coordonnées.`
            );
        }
    }, [artisan]);

    if (error) {
        return (
            <main className="artisan-details">
                <p role="alert">
                    {error}
                </p>
            </main>
        );
    }

    if (!artisan) {
        return (
            <main className="artisan-details">
                <p role="status">
                    Chargement...
                </p>
            </main>
        );
    }

    return (
        <main className="artisan-details">
            <section className="artisan-details_info">
                <h1 className="artisan-details_title">
                    {artisan.nom}
                </h1>

                <div className="artisan-details_profile">
                    <div className="artisan-details_visual">
                        <img
                            className="artisan-details_image"
                            src={defaultProfile}
                            alt=""
                            aria-hidden="true"
                        />
                    </div>

                    <div className="artisan-details_meta">
                        <Rating note={artisan.note} />

                        <p className="artisan-details_specialite">
                            <img
                                src={hammerIcon}
                                alt=""
                                aria-hidden="true"
                            />
                            {artisan.Specialite.nom}
                        </p>

                        <p className="artisan-details_ville">
                            <img
                                src={locationIcon}
                                alt=""
                                aria-hidden="true"
                            />
                            {artisan.ville}
                        </p>
                    </div>
                </div>

                <div className="artisan-details_about">
                    <h2>À propos de l’entreprise :</h2>
                    <p>{artisan.a_propos}</p>
                </div>

                {artisan.site_web && (
                    <div className="artisan-details_website">
                        <span>Site internet :</span>
                            <img
                                src={infoIcon}
                                alt=""
                                aria-hidden="true"
                            />
                        <a
                            href={artisan.site_web}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visiter le site de ${artisan.nom}, ouverture dans un nouvel onglet`}
                        >
                            {artisan.site_web}
                        </a>
                    </div>
                )}
            </section>

            <ContactForm artisan={artisan} />
        </main>
    );
}

export default ArtisanDetails;