-- ============================================
-- Base de données : Trouve ton artisan
-- ============================================

DROP DATABASE IF EXISTS trouve_ton_artisan;

CREATE DATABASE trouve_ton_artisan
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE trouve_ton_artisan;

-- ============================================
-- Table : categories
-- ============================================

CREATE TABLE categories (
    id_categorie INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL UNIQUE
);

-- ========================================================
-- Table : specialites avec clé étrangère pour categories
-- ========================================================

CREATE TABLE specialites (
    id_specialite INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    id_categorie INT UNSIGNED NOT NULL,

    CONSTRAINT fk_specialite_categorie
        FOREIGN KEY (id_categorie)
        REFERENCES categories(id_categorie)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- =======================================================
-- Table : artisans avec clé étrangère pour specialites
-- =======================================================

CREATE TABLE artisans (
    id_artisan INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    note DECIMAL(2,1) NOT NULL
        CHECK (note BETWEEN 0 AND 5),
    ville VARCHAR(100) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    a_propos TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    site_web VARCHAR(255),
    top BOOLEAN NOT NULL DEFAULT FALSE,
    id_specialite INT UNSIGNED NOT NULL,

    CONSTRAINT fk_artisan_specialite
        FOREIGN KEY (id_specialite)
        REFERENCES specialites(id_specialite)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);