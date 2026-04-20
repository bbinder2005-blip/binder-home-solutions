# Öffentliche URL ohne Lovable

Die Website ist für GitHub Pages vorbereitet. GitHub baut die Vite-App bei jedem Push auf `main` und veröffentlicht den Inhalt aus `dist`.

## Erste öffentliche URL

Sobald GitHub Pages im Repository auf `GitHub Actions` als Quelle steht, läuft die Website hier:

```text
https://bbinder2005-blip.github.io/binder-home-solutions/
```

Diese URL ist öffentlich, aber noch nicht die schönste Kundenadresse.

## Empfohlene Kunden-URL

Beste Wahl, weil sie bereits zur E-Mail-Adresse passt:

```text
https://fachberatung-binder.de
```

Hinweis: Diese Domain ist bereits registriert und zeigt aktuell noch auf IONOS-DNS. Wenn sie dir gehört, kann sie auf GitHub Pages umgezogen werden.

Gute Alternativen, die bei der DENIC-Abfrage am 20.04.2026 als frei gemeldet wurden:

```text
binder-hausberatung.de
hausberatung-binder.de
sonnenschutz-binder.de
```

Meine Empfehlung: `fachberatung-binder.de` verwenden, wenn du sie besitzt. Sonst `binder-hausberatung.de` sichern.

## DNS für GitHub Pages

In GitHub:

1. Repository öffnen.
2. `Settings` öffnen.
3. `Pages` öffnen.
4. Bei `Source` auf `GitHub Actions` stellen.
5. Bei `Custom domain` die gewünschte Domain eintragen.
6. `Enforce HTTPS` aktivieren, sobald GitHub das Zertifikat erstellt hat.

Beim Domain-Anbieter:

- Für `www` einen `CNAME` auf `bbinder2005-blip.github.io` setzen.
- Für die Hauptdomain `fachberatung-binder.de` die GitHub-Pages-A/AAAA-Records laut GitHub-Dokumentation setzen.

Offizielle Anleitung:

```text
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
```

Wenn die eigene Domain aktiv ist, muss im Workflow `VITE_BASE_PATH` von `/binder-home-solutions/` auf `/` geändert werden.
