import { useState } from "react";
import { useNavigate } from "react-router-dom";

import searchIcon from "../../assets/icons/search.svg";
import "./searchbar.scss";

function SearchBar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const searchValue = search.trim();

        if (!searchValue) {
            navigate("/artisans");
            return;
        }

        navigate(
            `/artisans?nom=${encodeURIComponent(searchValue)}`
        );
    }

    return (
        <form
            className="search-bar"
            onSubmit={handleSubmit}
        >
            <label
                className="search-bar_label"
                htmlFor="search"
            >
                Rechercher un artisan
            </label>

            <div className="search-bar_field">
                <input
                    className="search-bar_input"
                    id="search"
                    type="search"
                    name="search"
                    placeholder="Rechercher un artisan"
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                />

                <button
                    className="search-bar_button"
                    type="submit"
                    aria-label="Lancer la recherche"
                >
                    <img
                        className="search-bar_icon"
                        src={searchIcon}
                        alt=""
                        aria-hidden="true"
                    />
                </button>
            </div>
        </form>
    );
}

export default SearchBar;