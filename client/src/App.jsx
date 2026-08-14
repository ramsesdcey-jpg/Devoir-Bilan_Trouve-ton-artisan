import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"

import Home from "./pages/Home/home";
import ArtisanList from "./pages/ArtisanList/artisanlist";
import ArtisanDetails from "./pages/ArtisanDetails/artisandetails";
import NotFound from "./pages/NotFound/notfound";
import LegalPage from "./pages/LegalPage/legalpage";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/artisans"
                    element={<ArtisanList />}
                />

                <Route
                    path="/artisans/:id"
                    element={<ArtisanDetails />}
                />

                <Route path="*" element={<NotFound />} />

                <Route
                    path="/mentions-legales"
                    element={<LegalPage title="Mentions légales" />}
                />

                <Route
                    path="/donnees-personnelles"
                    element={<LegalPage title="Données personnelles" />}
                />

                <Route
                    path="/accessibilite"
                    element={<LegalPage title="Accessibilité" />}
                />

                <Route
                    path="/contact"
                    element={<LegalPage title="Contact" />}
                />

                <Route
                    path="/cookies"
                    element={<LegalPage title="Politique des cookies" />}
                />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;