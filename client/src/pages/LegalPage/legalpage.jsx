import { useEffect } from "react";

import "./legalpage.scss";

function LegalPage({ title }) {
    useEffect(() => {
        document.title = `Trouve ton artisan - ${title}`;

        const description =
            document.querySelector('meta[name="description"]');

        if (description) {
            description.setAttribute(
                "content",
                `${title} du site Trouve ton artisan.`
            );
        }
    }, [title]);
    
    return (
        <main className="legal-page">
            <div className="legal-page_header">
                <h1>{title}</h1>
            </div>

            <div className="legal-page_message">
                <p>Page en construction.</p>
            </div>
        </main>
    );
}

export default LegalPage;