import { Link } from "react-router-dom";

import Rating from "../Rating/rating";
import hammerIcon from "../../assets/icons/hammer.svg";
import locationIcon from "../../assets/icons/geo-alt.svg";

import "./artisancard.scss";

function ArtisanCard({ artisan }) {
    return (
        <article className="artisan-card">
            <Link
                className="artisan-card_link"
                to={`/artisans/${artisan.id_artisan}`}
                aria-label={`Consulter la fiche de ${artisan.nom}`}
            >
                <h2 className="artisan-card_title">
                    {artisan.nom}
                </h2>

                <Rating note={artisan.note} />

                <p className="artisan-card_specialite">
                    <img
                        className="artisan-card_icon"
                        src={hammerIcon}
                        alt=""
                        aria-hidden="true"
                    />

                    {artisan.Specialite.nom}
                </p>

                <p className="artisan-card_ville">
                    <img
                        className="artisan-card_icon"
                        src={locationIcon}
                        alt=""
                        aria-hidden="true"
                    />

                    {artisan.ville}
                </p>
            </Link>
        </article>
    );
}

export default ArtisanCard;