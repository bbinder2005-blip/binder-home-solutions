# Lead-Automation für Binder Hausberatung

Diese Website ist vorbereitet für HubSpot Free Forms, Calendly und Make.com. Die echte Automatisierung startet,
sobald die IDs und Links in der Deployment-Umgebung hinterlegt sind.

Das vollständige System mit Make.com, Google Calendar, Google Sheets und Fireflies.ai steht in
`docs/termin-automatisierung.md`.

## 1. HubSpot Formular verbinden

1. In HubSpot ein kostenloses Formular für Beratungsanfragen erstellen.
2. Im HubSpot-Einbettungscode `portalId` und `formId` kopieren.
3. Beim Hosting diese Variablen setzen:

```env
VITE_HUBSPOT_PORTAL_ID=deine_portal_id
VITE_HUBSPOT_FORM_ID=deine_form_id
```

Empfohlene Formularfelder:

- Name
- E-Mail
- Telefon
- Thema: Terrassendach, Markise, Rollladen, Dachfenster, Fenster/Türen, Sonstiges
- Ort oder PLZ
- Nachricht
- Wunschzeit für Rückruf

## 2. Calendly verbinden

1. In Calendly zuerst einen Termin-Typ erstellen: `Telefonische Erstberatung`.
2. Terminlänge: 15 bis 20 Minuten.
3. Optional einen zweiten Termin-Typ erstellen: `Haustermin vor Ort`.
4. Den Telefontermin als Haupt-Link in der Deployment-Umgebung setzen:

```env
VITE_CALENDLY_PHONE_URL=https://calendly.com/dein-name/telefonische-erstberatung
VITE_CALENDLY_HOME_URL=https://calendly.com/dein-name/haustermin
```

Empfehlung: den Haustermin nicht als ersten Hauptkontakt bewerben. Erst im Telefontermin klären, ob ein Vor-Ort-Termin sinnvoll ist.

## 3. Automatische E-Mail-Sequenz

### E-Mail 1: Sofort nach Anfrage

Betreff: Danke für Ihre Anfrage zur Hausberatung

Hallo {{ contact.firstname }},

vielen Dank für Ihre Anfrage. Ich habe Ihre Angaben erhalten und schaue mir an, worum es bei Ihrem Hausprojekt geht.

Damit ich den nächsten Schritt gut vorbereiten kann, helfen mir diese Punkte:

- Ort oder PLZ des Objekts
- Thema: Terrassendach, Markise, Rollladen, Dachfenster oder anderes
- wenn vorhanden: ein Foto der Situation
- wann ein Rückruf gut passt

Sie können auch direkt einen Termin wählen:
{{ calendly_link }}

Viele Grüße
Benedikt Binder

### E-Mail 2: Nach 2 Tagen ohne Termin

Betreff: Kurze Rückfrage zu Ihrer Beratungsanfrage

Hallo {{ contact.firstname }},

ich wollte kurz nachfragen, ob Ihre Anfrage noch aktuell ist.

Wenn Sie möchten, können wir zuerst telefonisch klären, welche Lösung für Ihr Anliegen sinnvoll ist. Das geht meistens schneller als lange Nachrichten.

Termin wählen:
{{ calendly_link }}

Viele Grüße
Benedikt Binder

### E-Mail 3: Vor dem Termin

Betreff: Vorbereitung für unseren Beratungstermin

Hallo {{ contact.firstname }},

für unseren Termin hilft es, wenn Sie diese Informationen bereitlegen:

- grobe Maße oder Fotos
- was verbessert werden soll: Sonne, Hitze, Wetter, Sichtschutz, Licht oder Sicherheit
- ob es um Neubau, Nachrüstung oder Austausch geht

Dann können wir schneller klären, welcher nächste Schritt sinnvoll ist.

Viele Grüße
Benedikt Binder

## 4. HubSpot Workflow

Ein einfacher Workflow reicht:

1. Auslöser: Formular `Beratungsanfrage` wurde abgeschickt.
2. Aktion: Kontakt anlegen oder aktualisieren.
3. Aktion: E-Mail 1 sofort senden.
4. Aktion: Aufgabe erstellen: Rückruf prüfen.
5. Wenn nach 2 Tagen kein Termin gebucht wurde: E-Mail 2 senden.
6. Wenn Termin gebucht wurde: E-Mail 3 einen Tag vor Termin senden.

Vor Live-Schaltung die Datenschutzerklärung mit den konkret genutzten Anbietern, Auftragsverarbeitung und Speicherzwecken ergänzen.
