-- ============================================
-- Base de données : Trouve ton artisan
-- Script d'alimentation de la base de données
-- ============================================

USE trouve_ton_artisan;

-- ============================================
-- Insertion des catégories
-- ============================================

INSERT INTO categories (nom)
VALUES
    ('Bâtiment'),
    ('Services'),
    ('Fabrication'),
    ('Alimentation');

-- ============================================
-- Insertion des spécialités
-- ============================================

INSERT INTO specialites (nom, id_categorie)
VALUES
    ('Chauffagiste', 1),
    ('Electricien', 1),
    ('Menuisier', 1),
    ('Plombier', 1),

    ('Coiffeur', 2),
    ('Fleuriste', 2),
    ('Toiletteur', 2),
    ('Webdesign', 2),

    ('Bijoutier', 3),
    ('Couturier', 3),
    ('Ferronier', 3),

    ('Boucher', 4),
    ('Boulanger', 4),
    ('Chocolatier', 4),
    ('Traiteur', 4);

    INSERT INTO artisans (
    nom,
    note,
    ville,
    image_url,
    a_propos,
    email,
    site_web,
    top,
    id_specialite
)

VALUES (
    'Boucherie Dumont',
    4.5,
    'Lyon',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'boucherie.dumond@gmail.com',
    NULL,
    FALSE,
    12
),

(
    'Au pain chaud',
    4.8,
    'Montélimar',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'aupainchaud@hotmail.com',
    NULL,
    TRUE,
    13
),

(
    'Chocolaterie Labbé',
    4.9,
    'Lyon',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'chocolaterie-labbe@gmail.com',
    'https://chocolaterie-labbe.fr',
    TRUE,
    14
),

(
    'Traiteur Truchon',
    4.1,
    'Lyon',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'contact@truchon-traiteur.fr',
    'https://truchon-traiteur.fr',
    FALSE,
    15
),

(
    'Orville Salmons',
    5.0,
    'Evian',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'o-salmons@live.com',
    NULL,
    TRUE,
    1
),

(
    'Mont Blanc Eléctricité',
    4.5,
    'Chamonix',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'contact@mont-blanc-electricite.com',
    'https://mont-blanc-electricite.com',
    FALSE,
    2
),

(
    'Boutot & fils',
    4.7,
    'Bourg-en-bresse',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'boutot-menuiserie@gmail.com',
    'https://boutot-menuiserie.com',
    FALSE,
    3
),

(
    'Vallis Bellemare',
    4.0,
    'Vienne',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'v.bellemare@gmail.com',
    'https://plomberie-bellemare.com',
    FALSE,
    4
),

(
    'Claude Quinn',
    4.2,
    'Aix-les-bains',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'claude.quinn@gmail.com',
    NULL,
    FALSE,
    9
),

(
    'Amitee Lécuyer',
    4.5,
    'Annecy',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'a.amitee@hotmail.com',
    'https://lecuyer-couture.com',
    FALSE,
    10
),

(
    'Ernest Carignan',
    5.0,
    'Le Puy-en-Velay',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'e-carigan@hotmail.com',
    NULL,
    FALSE,
    11
),

(
    'Royden Charbonneau',
    3.8,
    'Saint-Priest',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'r.charbonneau@gmail.com',
    NULL,
    FALSE,
    5
),

(
    'Leala Dennis',
    3.8,
    'Chambéry',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'l.dennos@hotmail.fr',
    'https://coiffure-leala-chambery.fr',
    FALSE,
    5
),

(
    'C''est sup''hair',
    4.1,
    'Romans-sur-Isère',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'sup-hair@gmail.com',
    'https://sup-hair.fr',
    FALSE,
    5
),

(
    'Le monde des fleurs',
    4.6,
    'Annonay',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'contact@le-monde-des-fleurs-annonay.fr',
    'https://le-monde-des-fleurs-annonay.fr',
    FALSE,
    6
),

(
    'Valérie Laderoute',
    4.5,
    'Valence',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'v-laredoute@gmail.com',
    NULL,
    FALSE,
    7
),

(
    'CM Graphisme',
    4.4,
    'Valence',
    '/images/artisans/profil.png',    
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'contact@cm-graphisme.com',
    'https://cm-graphisme.com',
    FALSE,
    8
);