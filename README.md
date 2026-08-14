# Trouve ton artisan

Application web réalisée dans le cadre d’un devoir de développement web.

Le projet permet de rechercher des artisans de la région Auvergne-Rhône-Alpes, de filtrer les résultats par catégorie, de consulter la fiche détaillée d’un artisan et d’utiliser un formulaire de contact.

## Fonctionnalités principales

* Affichage des artisans provenant d’une base de données MySQL
* Recherche d’un artisan par nom
* Filtrage par catégorie
* Affichage des artisans du mois
* Fiche détaillée pour chaque artisan
* Affichage de la note, de la spécialité, de la ville et du site internet éventuel
* Formulaire de contact avec validation des données
* Gestion des erreurs et des artisans inexistants
* Page 404
* Pages légales temporaires
* Interface responsive pour desktop, tablette et mobile
* Navigation accessible au clavier
* Titres et descriptions SEO dynamiques

## Technologies utilisées

### Frontend

- React
- React Router
- Vite
- JavaScript
- SCSS
- Bootstrap
- HTML5

### Backend

* Node.js
* Express
* Sequelize
* MySQL

### Sécurité

* Variables d’environnement avec `dotenv`
* Compte MySQL dédié avec privilèges limités
* Validation des données côté serveur
* Validation Sequelize
* Contraintes SQL
* CORS configuré pour le frontend autorisé
* Helmet
* Limitation de la taille des requêtes JSON
* Routes sensibles non exposées publiquement
* Audit des dépendances avec `npm audit`

## Arborescence générale

```text
.
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── .env.example
│   └── package.json
│
├── database/
│   ├── create_database.sql
│   └── seed_database.sql
│
├── documentation/
│   └── database-design/
│       └── dictionnaire-donnees.md
│
├── .gitignore
└── README.md
```

## Prérequis

Avant de lancer le projet, il faut disposer de :

* Node.js
* npm
* MySQL
* un environnement permettant d’utiliser MySQL, par exemple XAMPP et phpMyAdmin

## Installation du projet

Cloner le dépôt :

```bash
git clone URL_DU_DEPOT
```

Puis entrer dans le dossier du projet :

```bash
cd NOM_DU_PROJET
```

## Installation du frontend

Se placer dans le dossier `client` :

```bash
cd client
```

Installer les dépendances :

```bash
npm install
```

Lancer le frontend :

```bash
npm run dev
```

Par défaut, Vite lance le frontend sur :

```text
http://localhost:5173
```

## Installation du backend

Dans un autre terminal, se placer dans le dossier `server` :

```bash
cd server
```

Installer les dépendances :

```bash
npm install
```

Créer un fichier `.env` à partir de `.env.example`.

Exemple :

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=trouve_ton_artisan
DB_USER=artisan_app
DB_PASSWORD=VOTRE_MOT_DE_PASSE

PORT=3000
CLIENT_URL=http://localhost:5173
```

Le fichier `.env` contient des informations sensibles et ne doit pas être envoyé sur GitHub.

## Création de la base de données

Les scripts SQL se trouvent dans le dossier :

```text
database/
```

Exécuter d’abord :

```text
create_database.sql
```

Puis :

```text
seed_database.sql
```

Le premier script crée la base et ses tables.

Le second ajoute les catégories, spécialités et artisans nécessaires au fonctionnement du projet.

## Création de l’utilisateur MySQL

Pour éviter d’utiliser le compte administrateur `root`, il est recommandé de créer un utilisateur dédié à l’application.

Exemple :

```sql
CREATE USER 'artisan_app'@'localhost'
IDENTIFIED BY 'VOTRE_MOT_DE_PASSE';

GRANT SELECT
ON trouve_ton_artisan.*
TO 'artisan_app'@'localhost';
```

Le mot de passe choisi doit ensuite être renseigné dans le fichier `.env`.

## Lancement du backend

Depuis le dossier `server` :

```bash
npm run dev
```

L’API est disponible par défaut sur :

```text
http://localhost:3000
```

## Principales routes de l’API

```text
GET /artisans
```

Récupère la liste des artisans.

```text
GET /artisans/:id
```

Récupère un artisan selon son identifiant.

```text
GET /categories
```

Récupère les catégories d’artisanat.

```text
POST /artisans/:id/contact
```

Traite les données du formulaire de contact associé à un artisan.

## Exemples de filtres

Afficher les artisans d’une catégorie :

```text
/artisans?categorie=Bâtiment
```

Rechercher un artisan par nom :

```text
/artisans?nom=dum
```

Afficher les artisans du mois :

```text
/artisans?top=true
```

## Accessibilité

Le projet contient notamment :

* navigation clavier
* indicateurs de focus
* labels associés aux champs de formulaire
* textes alternatifs ou éléments décoratifs masqués aux lecteurs d’écran
* messages d’erreur annoncés avec `role="alert"`
* messages de succès annoncés avec `role="status"`
* structure sémantique avec titres, sections, navigation et liens
* langue principale définie avec `lang="fr"`

## SEO

Les principales pages disposent de :

* titres dynamiques
* meta descriptions
* structure HTML sémantique
* favicon personnalisé

## Sécurité et dépendances

Les dépendances frontend et backend ont été vérifiées avec :

```bash
npm audit
```

Le client ne présente plus de vulnérabilité détectée.

Une vulnérabilité transitive modérée liée à `uuid` reste signalée côté serveur via Sequelize. La correction proposée par `npm audit fix --force` impliquerait une modification majeure potentiellement incompatible de Sequelize. Elle n’a donc pas été appliquée afin de préserver la stabilité du projet et fait l’objet d’une veille sécurité.

## Scripts utiles

Dans `client` :

```bash
npm run dev
npm run lint
npm audit
```

Dans `server` :

```bash
npm run dev
npm audit
```

## Liens

Dépôt GitHub :

```text
À AJOUTER
```

Site accessible en ligne :

```text
À AJOUTER APRÈS LE DÉPLOIEMENT
```

## Auteur

Projet réalisé dans le cadre d’une formation de développement web.