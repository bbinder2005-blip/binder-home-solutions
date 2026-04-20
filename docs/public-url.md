# Öffentliche URL ohne Lovable

Die Website ist für GitHub Pages vorbereitet. GitHub baut die Vite-App bei jedem Push auf `main` und veröffentlicht den Inhalt aus `dist`.

## Ziel-URL

Die Website soll sauber unter dieser Adresse laufen:

```text
https://binder-hausberatung.de
```

Die Domain wurde bei der DENIC-Abfrage am 20.04.2026 als frei gemeldet. Sie muss noch bei einem Domain-Anbieter registriert werden.

## Übergangs-URL

Bis die Domain registriert und verbunden ist, kann GitHub Pages technisch auch unter der GitHub-Adresse laufen. Für diese Übergangsadresse müsste `VITE_BASE_PATH` im Workflow wieder auf `/binder-home-solutions/` gesetzt werden.

## DNS für GitHub Pages

In GitHub:

1. Repository öffnen.
2. `Settings` öffnen.
3. `Pages` öffnen.
4. Bei `Source` auf `GitHub Actions` stellen.
5. Bei `Custom domain` `binder-hausberatung.de` eintragen.
6. `Enforce HTTPS` aktivieren, sobald GitHub das Zertifikat erstellt hat.

Beim Domain-Anbieter:

- Für `www` einen `CNAME` auf `bbinder2005-blip.github.io` setzen.
- Für die Hauptdomain `binder-hausberatung.de` die GitHub-Pages-A/AAAA-Records laut GitHub-Dokumentation setzen.

Offizielle Anleitung:

```text
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
```
