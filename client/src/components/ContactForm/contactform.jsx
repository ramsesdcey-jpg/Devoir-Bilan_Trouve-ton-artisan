import { useState } from "react";

import "./contactform.scss";

function ContactForm({ artisan }) {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        objet: "",
        message: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await fetch(
                `http://localhost:3000/artisans/${artisan.id_artisan}/contact`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const resultat = await response.json();

            if (!response.ok) {
                throw new Error(
                    resultat.message ||
                        "L'envoi du formulaire a échoué."
                );
            }

            setSuccessMessage(resultat.message);

            setFormData({
                nom: "",
                email: "",
                objet: "",
                message: "",
            });
        } catch (error) {
            console.error(
                "Erreur lors de l'envoi du formulaire :",
                error
            );

            setErrorMessage(error.message);
        }
    }

    return (
        <section className="contact-form">
            <h2 className="contact-form_title">
                Formulaire de contact :
            </h2>

            <form
                className="contact-form_form"
                onSubmit={handleSubmit}
            >
                <div className="contact-form_row">
                    <input
                        id="contact-nom"
                        type="text"
                        name="nom"
                        placeholder="Nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="contact-nom">
                        <span aria-hidden="true">*</span>
                        Nom
                    </label>
                </div>

                <div className="contact-form_row">
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="contact-email">
                        <span aria-hidden="true">*</span>
                        Email
                    </label>
                </div>

                <div className="contact-form_row">
                    <input
                        id="contact-objet"
                        type="text"
                        name="objet"
                        value={formData.objet}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="contact-objet">
                        <span aria-hidden="true">*</span>
                        Objet
                    </label>
                </div>

                <div className="contact-form_message">
                    <label
                        className="sr-only"
                        htmlFor="contact-message"
                    >
                        Message
                    </label>

                    <textarea
                        id="contact-message"
                        name="message"
                        placeholder="Veuillez entrer votre message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    className="contact-form_button"
                    type="submit"
                >
                    Envoyer
                </button>

                {successMessage && (
                    <p
                        className="contact-form_success"
                        role="status"
                    >
                        {successMessage}
                    </p>
                )}

                {errorMessage && (
                    <p
                        className="contact-form_error"
                        role="alert"
                    >
                        {errorMessage}
                    </p>
                )}
            </form>
        </section>
    );
}

export default ContactForm;