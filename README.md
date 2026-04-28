# Boom Maker — Templates LinkedIn (render-by-URL)

Système de génération automatisée de visuels LinkedIn 1080×1080 pour Boom Maker.
Pilotable via URL params, hébergé sur GitHub Pages, capturé par HTMLCSStoImage, déclenché par Make.

```
[Trigger Make] → [HTTP Screenshot] → [GitHub Pages render.html?...] → [PNG] → [LinkedIn / Drive / Notion]
```

---

## Structure du repo

```
boommaker-render/
├── render.html          ← page de rendu (1 template plein écran 1080×1080)
├── index.html           ← page d'accueil avec liens vers les 3 templates
├── README.md            ← ce fichier
├── .nojekyll            ← force GitHub Pages à servir tous les fichiers
└── templates/
    ├── bm-shared.jsx    ← logo, frame, footer, palettes (à charger en premier)
    ├── bm-tip.jsx       ← composants ThemedTip / TemplateTip
    ├── bm-cover.jsx     ← composant TemplateCover
    └── bm-case.jsx      ← composant TemplateCase
```

---

## 1) Aperçu local (avant de pousser)

Babel ne tourne pas avec `file://` à cause de CORS. Il faut un mini serveur HTTP :

```bash
cd boommaker-render
python3 -m http.server 8080
# puis ouvre http://localhost:8080/render.html?template=tip
```

---

## 2) Déploiement GitHub Pages (5 minutes)

1. Crée un repo public sur GitHub (ex. `boommaker-render`).
2. Pousse le contenu du dossier `boommaker-render/` à la racine du repo.
3. **Settings → Pages → Source : `Deploy from a branch`**
4. **Branch : `main` / `(root)`** → Save.
5. Attends ~1 min, puis ton URL devient :
   ```
   https://<your-username>.github.io/<your-repo>/
   ```
6. Test : `https://<your-username>.github.io/<your-repo>/render.html?template=case`

> Le fichier `.nojekyll` empêche Jekyll de filtrer les fichiers — important pour que `templates/*.jsx` soit servi.

---

## 3) Mapping complet des params

### Globaux (tous templates)

| Param        | Valeurs                                     | Défaut      | Description                              |
|--------------|---------------------------------------------|-------------|------------------------------------------|
| `template`   | `tip` · `cover` · `case`                    | `tip`       | Quel template afficher                   |
| `theme`      | `dark` · `light`                            | `dark`      | (tip uniquement)                          |
| `font`       | `geist` · `inter` · `grotesk`               | `geist`     | Police de tout le rendu                   |
| `accent`     | `violet` · `cyan` · `boom` · `pink`         | selon tpl   | Couleur d'accent                          |
| `showLogo`   | `true` · `false` · `1` · `0`                | `true`      | Affiche le logo Boom Maker dans le footer |

Défauts d'accent : `tip`→`violet`, `cover`→`boom`, `case`→`cyan`.

---

### `template=tip` — Astuce / conseil

| Param         | Type   | Défaut                                                   |
|---------------|--------|----------------------------------------------------------|
| `tipNumber`   | nombre | `7`                                                       |
| `tipEyebrow`  | texte  | `Astuce no-code`                                          |
| `tipTitle`    | texte  | `Automatisez d'abord`                                     |
| `tipTitleEm`  | texte  | `ce qui vous coûte une heure par jour.`                   |
| `tipBody`     | texte  | `Avant de viser l'agent IA qui fait tout, scriptez...`    |
| `tipP1Tag`    | texte  | `REPÉRER`                                                 |
| `tipP1Text`   | texte  | `Listez les 5 actions répétées chaque semaine.`           |
| `tipP2Tag`    | texte  | `MESURER`                                                 |
| `tipP2Text`   | texte  | `Chronométrez. Sous 15min/jour, ça vaut le coup.`         |
| `tipP3Tag`    | texte  | `DÉCLENCHER`                                              |
| `tipP3Text`   | texte  | `Un trigger clair → un workflow → un résultat.`           |
| `tipFooter`   | texte  | `boommaker.io`                                            |

---

### `template=cover` — Carrousel · Couverture

| Param              | Type   | Défaut                                              |
|--------------------|--------|-----------------------------------------------------|
| `coverKicker`      | texte  | `Boom Maker — Playbook`                             |
| `coverTitle1`      | texte  | `5 workflows`                                       |
| `coverTitleEm`     | texte  | `qui font gagner`                                   |
| `coverTitle2`      | texte  | `10h / semaine.`                                    |
| `coverSubtitle`    | texte  | `Le carrousel à lire avant d'embaucher...`          |
| `coverTotalSlides` | nombre | `8`                                                 |
| `coverSwipe`       | texte  | `Swipe`                                             |

---

### `template=case` — Étude de cas

| Param             | Type   | Défaut                                |
|-------------------|--------|---------------------------------------|
| `caseSector`      | texte  | `E-COMMERCE / DTC`                    |
| `caseClient`      | texte  | `Atelier Verel`                       |
| `caseHeadline`    | texte  | `On a remplacé 4 outils SaaS par`     |
| `caseHeadlineEm`  | texte  | `un seul agent IA.`                   |
| `caseMetric`      | texte  | `−68`                                  |
| `caseMetricUnit`  | texte  | `%`                                   |
| `caseMetricLabel` | texte  | `Coût opérationnel mensuel`           |
| `caseDelta`       | texte  | `÷ 3,1`                                |
| `caseBefore`      | texte  | `2 840 €/mois`                        |
| `caseAfter`       | texte  | `910 €/mois`                          |
| `caseProof1`      | texte  | `Setup en 11 jours`                   |
| `caseProof2`      | texte  | `0 ligne de code`                     |
| `caseProof3`      | texte  | `ROI < 6 semaines`                    |
| `caseFooter`      | texte  | `boommaker.io / cas-clients`          |

---

## 4) Exemple d'URL prête à coller

```
https://<your-username>.github.io/<your-repo>/render.html
  ?template=case
  &caseSector=SAAS+B2B
  &caseClient=Notion
  &caseHeadline=Comment+ils+ont+coupé
  &caseHeadlineEm=leur+coût+support+de+moitié.
  &caseMetric=−54
  &caseMetricUnit=%
  &caseMetricLabel=Tickets+support+résolus+sans+humain
  &caseDelta=÷+2,2
  &caseBefore=380€/ticket
  &caseAfter=170€/ticket
  &caseProof1=Setup+en+9+jours
  &caseProof2=0+code
  &caseProof3=Adopté+par+l'équipe+CS
  &accent=cyan
```

> En production, **ne mets pas de retours à la ligne** dans l'URL. Make va construire la chaîne pour toi (voir section 6).

---

## 5) Compte HTMLCSStoImage (3 minutes)

1. Va sur https://htmlcsstoimage.com → **Sign up** (50 images/mois en gratuit).
2. Dans le dashboard, copie ton `User ID` et ton `API Key` (onglet *API*).
3. Tu auras besoin de ces deux valeurs dans le module HTTP Make.

---

## 6) Module HTTP dans Make.com

Crée un module **HTTP → Make a request** avec :

| Champ              | Valeur                                                                                  |
|--------------------|------------------------------------------------------------------------------------------|
| URL                | `https://hcti.io/v1/image`                                                              |
| Method             | `POST`                                                                                  |
| Body type          | `Application/x-www-form-urlencoded`                                                      |
| Authorization      | `Basic Auth` → User: `<your_user_id>` · Password: `<your_api_key>`                       |
| Parse response     | ✅ Yes                                                                                   |

**Fields (form-urlencoded) :**

| Name              | Value                                                                                                           |
|-------------------|-----------------------------------------------------------------------------------------------------------------|
| `url`             | `https://<your-username>.github.io/<your-repo>/render.html?template=case&caseClient={{encodeURL(1.client)}}&caseMetric={{encodeURL(1.metric)}}&...` |
| `viewport_width`  | `1080`                                                                                                          |
| `viewport_height` | `1080`                                                                                                          |
| `device_scale`    | `2`                                                                                                             |
| `ms_delay`        | `1500`                                                                                                          |
| `selector`        | `#render-root` *(facultatif — crop pile au cadre)*                                                              |

> **Important** : `ms_delay=1500` laisse le temps à Babel de compiler les JSX et aux Google Fonts de se charger. Tu peux pousser à `2000` si tu vois des artefacts.

**Réponse :**

```json
{ "url": "https://hcti.io/v1/image/abc123.png" }
```

Tu passes `1.url` au module suivant (LinkedIn, Drive, Buffer, Hootsuite, Notion…).

---

## 7) Tips encodage Make

Tous les params texte doivent passer par `encodeURL()` dans Make :

```
{{encodeURL(1.title)}}
```

Sinon les caractères spéciaux (`−`, `÷`, `€`, `'`, accents, `+`) cassent l'URL ou s'affichent mal.

**Règle simple** : tous les champs Sheets/Airtable que tu injectes → `encodeURL(...)`.

---

## 8) Test bout-en-bout

1. Ouvre l'URL `render.html?template=case&caseClient=Test` dans ton navigateur → vérifie que le visuel s'affiche.
2. Lance ton scénario Make en mode *Run once*.
3. Tu dois recevoir une URL HTMLCSStoImage. Ouvre-la → tu vois ton 1080×1080.
4. Si l'image est blanche : augmente `ms_delay` à `2500`.
5. Si les caractères s'affichent en `%E2%88%92` : tu as oublié `encodeURL()` côté Make.

---

## 9) Évolutions possibles

- **Slides intermédiaires** : ajouter `template=slide` + un param `slideIndex=1..N` pour générer un carrousel complet en plusieurs appels.
- **Mode batch** : un endpoint qui prend un JSON et renvoie N URLs.
- **Webhook back** : HTMLCSStoImage peut t'envoyer un webhook quand l'image est prête (utile pour des grosses queues).

---

## Crédits

Système basé sur les composants React `bm-shared`, `bm-tip`, `bm-cover`, `bm-case` (templates Boom Maker).
