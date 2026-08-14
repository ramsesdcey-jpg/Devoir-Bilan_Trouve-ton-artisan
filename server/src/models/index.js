const Artisan = require("./Artisan");
const Specialite = require("./Specialite");
const Categorie = require("./Categorie");

//1 catégorie peut contenir plusieurs spécialités
Categorie.hasMany(Specialite, {
    foreignKey: "id_categorie",
});

//Chaque spécialité appartient à 1 catégorie
Specialite.belongsTo(Categorie, {
    foreignKey: "id_categorie",
});

//1 spécialité peut être associée à plusieurs artisans
Specialite.hasMany(Artisan, {
    foreignKey: "id_specialite",
});

//Chaque artisan appertient à 1 spécialité
Artisan.belongsTo(Specialite, {
    foreignKey: "id_specialite",
});

module.exports = {
    Artisan,
    Specialite,
    Categorie,
};
