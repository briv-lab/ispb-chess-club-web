# ISPB Chess Club

Refonte du site historique avec React, TypeScript, Tailwind CSS 4 et des composants shadcn/ui (Button, Accordion, Dialog) basés sur Radix UI.

## Démarrer

```sh
npm install
npm run dev
```

## Version de production

```sh
npm run build
npm run preview
```

Le dossier `dist` peut être servi par un hébergement statique. Aucun serveur PHP n’est nécessaire. Le contact utilise l’adresse mail existante ; l’adhésion renvoie vers HelloAsso et les cours réutilisent la playlist YouTube d’origine.

## Cloudflare Pages et référencement

URL de production : `https://ispbchessclub.pages.dev/`.

Dans Cloudflare Pages, choisir le nom de projet **ispbchessclub**, la commande de build **npm run build**, le dossier de sortie **dist**, et Node.js **22** (`.node-version`). Le dépôt utilise npm et son lockfile. Le build génère le HTML statique du club, puis React reprend les interactions dans le navigateur. Il n’y a pas de serveur ni de Functions à provisionner.

La configuration `wrangler.jsonc` indique également le nom et le dossier de sortie pour un futur déploiement avec Wrangler. Aucun déploiement n’est lancé automatiquement par le build.

- URL canonique et métadonnées de partage Open Graph / Twitter.
- Image de partage locale de 1200 × 630 pixels.
- Données structurées Organization et WebSite sans adresse ni événement à venir inventés.
- `robots.txt` autorise l’exploration et indique le sitemap.
- `sitemap.xml` contient l’unique page réelle, sans fausses pages pour les ancres.
- `_headers` configure le cache des ressources avec empreinte et le `noindex` des sous-domaines de prévisualisation uniquement. La production `ispbchessclub.pages.dev` reste indexable.
- Une vraie page 404 évite de renvoyer l’accueil avec un statut 200 pour tous les chemins inconnus.
- `_redirects` reprend les anciennes URLs des cours et des événements.
- Favicons ICO (16/32/48/64), PNG (16/32/48), Apple touch icon 180, icônes de manifeste 192/512 et maskable 512. L’icône SVG monochrome des onglets Safari épinglés reprend le roi du logo sous une forme simplifiée.

Après mise en ligne, vérifier `robots.txt`, `sitemap.xml` et la canonique sur le domaine réel. Ajouter le site à Google Search Console, valider la propriété selon la méthode proposée pour ce domaine et envoyer `https://ispbchessclub.pages.dev/sitemap.xml`. Faire de même avec Bing Webmaster Tools si souhaité. Les fichiers préparés facilitent l’exploration, sans garantir un classement ni un délai d’indexation.

Pour contrôler le site de production localement :

```sh
npm run build
npm run preview
```

Le mode développement affiche l’application React habituelle ; le HTML pré-rendu est présent dans `dist/index.html`.

## Direction artistique

Une revue de club : papier crème, vert sauge du logo, vert profond, typographie serif, photo documentaire et motifs d’échiquier. Le logo, les portraits disponibles, la photo d’une partie et le ton convivial du site original sont conservés. Les effets se limitent aux interactions utiles ; les préférences de réduction des animations sont respectées.

## Souvenir de la venue de Marie Sebag

La section « Dans les souvenirs du club » reprend le portrait `Marie-SEBAG.webp` du dossier original. La venue au club est confirmée par l’utilisateur. Le fichier HTML associait ce visuel à un lien HelloAsso « tournoi et conférences », mais ne permet pas de dater sa visite avec certitude. La section ne lui attribue donc pas la date du 10 avril 2025 et ne présente pas le portrait comme une photo prise au club.

## Thèmes et animations

Le thème suit automatiquement les préférences de l’appareil dès le premier affichage. Le bouton soleil/lune permet de choisir un thème et mémorise ce choix dans le navigateur. Le bouton « Thème auto » en bas de page réactive le suivi du système. Le thème fonctionne aussi si le stockage local est bloqué et se synchronise entre les onglets.

Le texte sous le slogan reprend des expressions de l’ancien site. Son défilement est réalisé en CSS, avec une commande de pause. Les animations sont désactivées si l’appareil demande une réduction du mouvement. Aucune bibliothèque d’animation supplémentaire n’est nécessaire.

La rubrique Progresser reprend la photo originale de Heidi Walley, créditée Unsplash, à la place de l’échiquier décoratif.

```sh
npm run format
npm run format:check
```

## Contenus à confirmer avant publication

- Reprise des séances, horaires et salles actuels : le mardi 17h15–19h15 est l’horaire historique, présenté comme tel.
- Composition et fonctions du bureau : les membres sont ceux du site fourni et sont explicitement signalés comme historiques.
- Photo d’Arthur : absente du dossier original, remplacée par un cavalier sur fond graphique.
- Prochain tournoi : aucune date inventée. L’édition du 10 avril 2025 est dans les archives.
- Validité de la campagne HelloAsso et de la playlist YouTube.

Pour les prochaines photos, privilégier une vraie séance en lumière naturelle, des cadrages serrés sur les mains et les pièces, et des portraits simples sur le campus. Éviter les images de banque et conserver ce caractère associatif.

Le dossier legacy du Bureau n’a pas été modifié. Les anciens scripts PHP, pages de template génériques et services inactifs ne sont pas transférés.
