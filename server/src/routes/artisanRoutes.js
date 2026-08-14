const express = require("express");

const artisanController = require("../controllers/artisanController");

const router = express.Router();

// GET /artisans
// Récupère tous les artisans
router.get("/", artisanController.getAllArtisans);

// GET /artisans/:id
// Récupère un artisan par son identifiant
router.get("/:id", artisanController.getArtisanById);

// POST /artisans/:id/contact
// Traite le formulaire de contact pour un artisan
router.post(
    "/:id/contact",
    artisanController.contactArtisan
);

module.exports = router;