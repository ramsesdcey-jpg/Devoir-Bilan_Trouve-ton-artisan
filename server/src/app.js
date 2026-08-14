const sequelize = require("./config/database");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const artisanRoutes = require("./routes/artisanRoutes");
const categorieRoutes = require("./routes/categorieRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(helmet());

app.use(
    cors({
        origin: process.env.CLIENT_URL,
    })
);

app.use(
    express.json({
        limit: "10kb",
    })
);

// Autorise le frontend React à interroger l’API
app.use(
    cors({
        origin: process.env.CLIENT_URL,
    })
);

// Permet à Express de lire le JSON envoyé dans les requêtes
app.use(express.json());

app.get("/", (req, res) => {
    res.send("L'API Trouve ton artisan fonctionne !");
});

app.use("/artisans", artisanRoutes);
app.use("/categories", categorieRoutes);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connexion à MySQL réussie !");
    })
    .catch((error) => {
        console.error("Impossible de se connecter à MySQL :", error);
    });

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});