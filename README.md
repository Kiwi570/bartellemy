# 🔧 Bartellemy-Robinet - Site Web Professionnel

Site web moderne et professionnel pour **Bartellemy-Robinet**, entreprise familiale de chauffage, plomberie et énergies renouvelables à Bar-le-Duc depuis plus de 40 ans.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-ff69b4?style=flat-square)

---

## ✨ Fonctionnalités

- 🎨 **Design professionnel** bleu & orange
- 📱 **100% responsive** (mobile, tablet, desktop)
- ⚡ **Animations fluides** (Framer Motion)
- 🏆 **Certifications RGE** mises en avant
- 📝 **Formulaire de devis** avec validation
- ⭐ **Témoignages clients** avec carrousel
- 🗺️ **Zone d'intervention** affichée
- 🔍 **SEO optimisé** pour artisan local

---

## 🚀 Démarrage rapide

### Prérequis

- **Node.js** 18.17 ou supérieur
- **npm** ou **yarn** ou **pnpm**

### Installation

```bash
# 1. Accéder au projet
cd bartellemy-robinet-website

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

### Ouvrir dans le navigateur

👉 **http://localhost:3000**

---

## 📁 Structure du projet

```
bartellemy-robinet-website/
├── src/
│   ├── app/                    # Pages (App Router)
│   │   ├── layout.tsx          # Layout global
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── globals.css         # Styles globaux
│   │   └── contact/
│   │       └── page.tsx        # Page contact/devis
│   │
│   ├── components/
│   │   ├── animations/         # Composants d'animation
│   │   ├── layout/             # Header & Footer
│   │   ├── sections/           # Sections de page
│   │   └── ui/                 # Composants UI
│   │
│   ├── data/                   # Données statiques
│   ├── lib/                    # Utilitaires
│   └── types/                  # Types TypeScript
│
├── tailwind.config.ts          # Config Tailwind
├── next.config.js              # Config Next.js
└── package.json
```

---

## 🎨 Direction Artistique

### Palette de couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Bleu Professionnel | `#1E3A5F` | Couleur principale |
| Orange Énergie | `#E85D04` | Accents, CTAs |
| Gris Ardoise | `#374151` | Textes |
| Vert RGE | `#059669` | Certifications |
| Blanc | `#FFFFFF` | Fonds |

### Typographies

| Usage | Police |
|-------|--------|
| **Titres** | Outfit |
| **Corps** | Inter |
| **Accents** | Montserrat |

---

## 📄 Pages disponibles

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil complète |
| `/contact` | Formulaire de devis |

### Pages suggérées à créer

- `/chauffage` — Détail services chauffage
- `/plomberie` — Détail plomberie & salle de bains
- `/climatisation` — Services climatisation
- `/realisations` — Galerie de chantiers
- `/entreprise` — Présentation & histoire

---

## 🏆 Certifications mises en avant

- **RGE QUALIPAC** — Pompes à chaleur
- **RGE QUALIBOIS** — Chaudières bois/granulés
- **RGE QUALIBAT** — Chaudières gaz
- **RGE QUALISOL** — Solaire thermique
- **HANDIBAT** — Aménagement PMR
- **Partenaire GRDF** — Gaz naturel

---

## ⚙️ Scripts

```bash
npm run dev          # Serveur de développement
npm run build        # Build production
npm run start        # Serveur production
npm run lint         # Vérification ESLint
```

---

## 🌐 Déploiement

### Vercel (recommandé)

1. Push sur GitHub
2. Connecter à [Vercel](https://vercel.com)
3. Déploiement automatique !

---

## 🔧 Personnalisation

### Modifier les données

Éditer `src/data/index.ts` pour :
- Modifier les **services**
- Mettre à jour les **certifications**
- Changer les **infos de contact**
- Ajouter des **témoignages**
- Modifier la **zone d'intervention**

### Modifier les couleurs

Éditer `tailwind.config.ts` section `colors`

---

## 📦 Dépendances principales

| Package | Version | Usage |
|---------|---------|-------|
| Next.js | 14.2 | Framework React |
| React | 18.3 | UI Library |
| TypeScript | 5.5 | Typage statique |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11.3 | Animations |
| React Hook Form | 7.52 | Formulaires |
| Zod | 3.23 | Validation |
| Embla Carousel | 8.1 | Carrousel |

---

## 📝 Informations entreprise

**Bartellemy-Robinet SARL**  
11 Rue de l'Étoile  
55000 Bar-le-Duc  

📞 03 29 79 10 68  
📧 contact@bartellemyrobinet.fr  

**Horaires**  
Lundi au Vendredi : 8h-12h / 14h-18h  
Samedi : Sur rendez-vous  
**Dépannage 7j/7**

**Zone d'intervention**  
40 km autour de Bar-le-Duc

---

## 📝 License

Ce projet est une création sur mesure pour Bartellemy-Robinet SARL.
Tous droits réservés © 2024

---

**Fait avec ❤️ pour le confort de tous**
