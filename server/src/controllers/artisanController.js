const {
    Artisan,
    Specialite,
    Categorie,
} = require("../models");

const { Op } = require("sequelize");

const getAllArtisans = async (req, res) => {
    try {
        const ville = req.query.ville;
        const top = req.query.top;
        const categorie = req.query.categorie;
        const nom = req.query.nom;

        const filtresArtisan = {};
        const filtreCategorie = {};

        if (ville) {
            filtresArtisan.ville = ville;
        }

        if (top !== undefined) {
            filtresArtisan.top = top === "true";
        }

        if (categorie) {
            filtreCategorie.nom = categorie;
        }

        if (nom) {
             filtresArtisan.nom = {
            [Op.like]: `%${nom}%`,
            };
        }

        const artisans = await Artisan.findAll({
            where: filtresArtisan,

            include: {
                model: Specialite,
                required: categorie ? true : false,

                include: {
                    model: Categorie,
                    where: categorie
                        ? filtreCategorie
                        : undefined,
                    required: categorie ? true : false,
                },
            },
        });

        res.json(artisans);
    } catch (error) {
        console.error(
            "Erreur lors de la récupération des artisans :",
            error
        );

        res.status(500).json({
            message:
                "Erreur lors de la récupération des artisans.",
        });
    }
};

// Récupérer un artisan par son identifiant
const getArtisanById = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                message: "Identifiant artisan invalide.",
            });
        }

        const artisan = await Artisan.findByPk(id, {
            include: {
                model: Specialite,
                include: {
                    model: Categorie,
                },
            },
        });

        if (!artisan) {
            return res.status(404).json({
                message: "Artisan introuvable.",
            });
        }

        res.json(artisan);
    } catch (error) {
        console.error(
            "Erreur lors de la récupération de l’artisan :",
            error
        );

        res.status(500).json({
            message:
                "Erreur lors de la récupération de l’artisan.",
        });
    }
};

// Créer un nouvel artisan
const createArtisan = async (req, res) => {
    try {
        const {
            nom,
            note,
            ville,
            image_url,
            a_propos,
            email,
            site_web,
            top,
            id_specialite,
        } = req.body;

        const champsObligatoires = [
            "nom",
            "note",
            "ville",
            "image_url",
            "a_propos",
            "email",
            "top",
            "id_specialite",
        ];

        for (const champ of champsObligatoires) {
            if (
                req.body[champ] === undefined ||
                req.body[champ] === null ||
                req.body[champ] === ""
            ) {
                return res.status(400).json({
                    message: `Le champ "${champ}" est obligatoire.`,
                });
            }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "L'adresse email n'est pas valide.",
            });
        }

        if (note < 0 || note > 5) {
            return res.status(400).json({
                message: "La note doit être comprise entre 0 et 5.",
            });
        }

        const artisan = await Artisan.create({
            nom,
            note,
            ville,
            image_url,
            a_propos,
            email,
            site_web,
            top,
            id_specialite,
        });

        res.status(201).json(artisan);
    } catch (error) {
        console.error(
            "Erreur lors de la création de l'artisan :",
            error
        );

        res.status(500).json({
            message: "Erreur lors de la création de l'artisan.",
        });
    }
};

// Modifier un artisan
const updateArtisan = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                message: "Identifiant artisan invalide.",
            });
        }

        const artisan = await Artisan.findByPk(id);

        if (!artisan) {
            return res.status(404).json({
                message: "Artisan introuvable.",
            });
        }

        const {
            nom,
            note,
            ville,
            image_url,
            a_propos,
            email,
            site_web,
            top,
            id_specialite,
        } = req.body;

        const donneesAutorisees = {
            nom,
            note,
            ville,
            image_url,
            a_propos,
            email,
            site_web,
            top,
            id_specialite,
        };

        Object.keys(donneesAutorisees).forEach((key) => {
            if (donneesAutorisees[key] === undefined) {
                delete donneesAutorisees[key];
            }
        });

        await artisan.update(donneesAutorisees);

        res.json(artisan);
    } catch (error) {
        console.error(
            "Erreur lors de la modification de l'artisan :",
            error
        );

        res.status(500).json({
            message:
                "Erreur lors de la modification de l'artisan.",
        });
    }
};

// Supprimer un artisan
const deleteArtisan = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                message: "Identifiant artisan invalide.",
            });
        }
        
        const artisan = await Artisan.findByPk(req.params.id);

        if (!artisan) {
            return res.status(404).json({
                message: "Artisan introuvable.",
            });
        }

        await artisan.destroy();

        res.json({
            message: "Artisan supprimé avec succès.",
        });
    } catch (error) {
        console.error(
            "Erreur lors de la suppression de l'artisan :",
            error
        );

        res.status(500).json({
            message: "Erreur lors de la suppression de l'artisan.",
        });
    }
};

// Envoyer un formulaire de contact à un artisan
const contactArtisan = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const {
            nom,
            email,
            objet,
            message,
        } = req.body;

        // Vérifie que l'identifiant est un entier positif
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                message: "Identifiant artisan invalide.",
            });
        }

        // Vérifie le type des données reçues
        if (
            typeof nom !== "string" ||
            typeof email !== "string" ||
            typeof objet !== "string" ||
            typeof message !== "string"
        ) {
            return res.status(400).json({
                message: "Format des données invalide.",
            });
        }

        // Supprime les espaces inutiles
        const cleanNom = nom.trim();
        const cleanEmail = email.trim();
        const cleanObjet = objet.trim();
        const cleanMessage = message.trim();

        // Vérifie qu'aucun champ n'est vide
        if (
            !cleanNom ||
            !cleanEmail ||
            !cleanObjet ||
            !cleanMessage
        ) {
            return res.status(400).json({
                message:
                    "Tous les champs sont obligatoires.",
            });
        }

        // Vérifie la longueur des données
        if (cleanNom.length > 100) {
            return res.status(400).json({
                message: "Le nom est trop long.",
            });
        }

        if (cleanEmail.length > 255) {
            return res.status(400).json({
                message:
                    "L'adresse email est trop longue.",
            });
        }

        if (cleanObjet.length > 150) {
            return res.status(400).json({
                message: "L'objet est trop long.",
            });
        }

        if (cleanMessage.length > 2000) {
            return res.status(400).json({
                message: "Le message est trop long.",
            });
        }

        // Vérifie le format de l'adresse email
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(cleanEmail)) {
            return res.status(400).json({
                message:
                    "L'adresse email n'est pas valide.",
            });
        }

        // Vérifie que l'artisan existe réellement
        const artisan = await Artisan.findByPk(id);

        if (!artisan) {
            return res.status(404).json({
                message: "Artisan introuvable.",
            });
        }

        // Le devoir ne demande pas d'envoyer
        // réellement un email.
        res.status(200).json({
            message:
                "Votre demande a bien été envoyée à l'artisan.",
        });
    } catch (error) {
        console.error(
            "Erreur lors de l'envoi du formulaire :",
            error
        );

        res.status(500).json({
            message:
                "Erreur lors de l'envoi du formulaire.",
        });
    }
};

module.exports = {
    getAllArtisans,
    getArtisanById,
    createArtisan,
    updateArtisan,
    deleteArtisan,
    contactArtisan,
};