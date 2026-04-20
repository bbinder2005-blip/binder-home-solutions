# Binder Hausberatung

Website für Beratung rund um Sonnenschutz, Terrassendächer, Markisen, Rollläden, Dachfenster sowie optionale Fenster- und Türthemen.

## Lokal entwickeln

Voraussetzung: Node.js und npm.

```sh
npm i
npm run dev
```

## Veröffentlichen

Die Website wird ohne Lovable über GitHub Pages veröffentlicht.

```sh
npm run build
```

Bei jedem Push auf `main` startet `.github/workflows/deploy-pages.yml` und veröffentlicht die gebaute Website.

Details zur öffentlichen URL und Domain stehen in `docs/public-url.md`.

## CRM und Termine

Die Website ist für HubSpot-Formulare und Calendly vorbereitet. Die benötigten Umgebungsvariablen stehen in `.env.example`.

Details zur Lead-Automation stehen in `docs/lead-automation.md`.

## Technik

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
