const { Categorie } = require("../models");

const getAllCategories = async (req, res) => {
    try {
        const categories = await Categorie.findAll({
            order: [["id_categorie", "ASC"]],
        });

        res.json(categories);
    } catch (error) {
        console.error(
            "Erreur lors de la récupération des catégories :",
            error
        );

        res.status(500).json({
            message:
                "Erreur lors de la récupération des catégories.",
        });
    }
};

module.exports = {
    getAllCategories,
};