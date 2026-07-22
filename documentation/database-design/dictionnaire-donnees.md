# Dictionnaire des données

## Entité Catégorie

| Champ | Type envisagé | Obligatoire | Description |
|---|---|---:|---|
| id | entier | Oui | Identifiant unique |
| nom | texte | Oui | Nom de la catégorie |
| slug | texte | Oui | Valeur utilisée dans l’URL |

## Entité Spécialité

| Champ | Type envisagé | Obligatoire | Description |
|---|---|---:|---|
| id | entier | Oui | Identifiant unique |
| nom | texte | Oui | Nom de la spécialité |
| categorie_id | entier | Oui | Catégorie associée |

## Entité Artisan

| Champ | Type envisagé | Obligatoire | Description |
|---|---|---:|---|
| id | entier | Oui | Identifiant unique |
| nom | texte | Oui | Nom de l’artisan ou de l’entreprise |
| note | décimal | Oui | Note comprise entre 0 et 5 |
| ville | texte | Oui | Localisation |
| a_propos | texte long | Oui | Présentation de l’artisan |
| email | texte | Oui | Adresse utilisée pour le contact |
| site_web | texte | Non | Site web éventuel |
| image_url | texte | Non | Adresse de l’image |
| top | booléen | Oui | Artisan du mois ou non |
| specialite_id | entier | Oui | Spécialité de l’artisan |