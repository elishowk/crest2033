# crest2033.fr — Suivi des engagements de la majorité municipale de Crest

**[crest2033.fr](https://crest2033.fr)** — Site citoyen et collaboratif de suivi des promesses de campagne de la majorité municipale de Crest (Drôme), élue en mars 2026.

Contact : [contact@crest2033.fr](mailto:contact@crest2033.fr)

## Fonctionnalités

- **Suivi des engagements** : chaque promesse du programme est détaillée avec ses actions concrètes et une barre de progression
- **Charte des élu·es** : suivi dédié de la mise en œuvre de la charte signée par les élu·es
- **Vote citoyen** : votez pour les engagements que vous jugez prioritaires

## Stack technique

- [Astro](https://astro.build) — générateur de site statique
- [Tailwind CSS](https://tailwindcss.com) — styles utilitaires
- [Preact](https://preactjs.com) — composants interactifs légers

## Développement

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:4321`.

## Mise à jour des engagements

Les contenus sont dans `src/content/` :

- `promesses/` — un fichier Markdown par thématique du programme
- `charte/` — un fichier Markdown par engagement de la charte des élu·es

Chaque fichier contient un frontmatter avec :
- `progress` : pourcentage d'avancement (0-100)
- `status` : `non-demarree`, `en-cours`, `avancee` ou `realisee`
- `actions` : liste des actions concrètes avec leur état (`done: true/false`) et date optionnelle

## Déploiement

```bash
npm run build
```

Le site statique est généré dans `dist/`. Déployez-le sur Netlify, Vercel, GitHub Pages ou tout hébergeur statique pointant vers `crest2033.fr`.

## Licence

Ce projet est open source. Les données du programme sont issues du [site officiel de campagne](https://www.crest2026.fr/).

Hébergé sur [crest2033.fr](https://crest2033.fr) — contact@crest2033.fr
