# Termin- und Kalenderautomatisierung

Dieses Setup verbindet die Website mit Calendly, Make.com, Google Calendar, Google Sheets und Fireflies.ai.
Die Website zeigt die Buchungsoptionen und öffnet Calendly als Popup. Die eigentliche Automatisierung laeuft in
Make.com, damit keine geheimen Webhook- oder API-Daten im Browser sichtbar sind.

## Website-Variablen

In GitHub unter `Settings -> Secrets and variables -> Actions -> Variables` anlegen:

```env
VITE_CALENDLY_PHONE_URL=https://calendly.com/dein-name/kostenloses-telefonat
VITE_CALENDLY_HOME_URL=https://calendly.com/dein-name/vor-ort-termin
VITE_HUBSPOT_PORTAL_ID=
VITE_HUBSPOT_FORM_ID=
```

Empfehlung:

- Telefonat: 15 Minuten
- Vor-Ort-Termin: 60 bis 90 Minuten
- Calendly mit Google Calendar verbinden
- Pufferzeiten in Calendly aktivieren
- Nur freie Zeiten aus Google Calendar anzeigen lassen

## Make-Szenario 1: Neue Calendly-Buchung

Trigger:

- App: Calendly
- Event: Invitee Created
- Terminarten: `Kostenloses Telefonat (15 Min.)` und `Vor-Ort-Termin vereinbaren`

Aktionen:

1. Google Sheets: neue Zeile in `Leads` anlegen.
2. Google Calendar: Termin erstellen oder bestaetigen.
3. Gmail: Bestaetigungs-E-Mail an Kunden senden.
4. Gmail: Benachrichtigung an dich senden.
5. WhatsApp: Benachrichtigung an dich senden.
6. Google Calendar oder Make Delay: Erinnerung 24 Stunden vorher an Kunden.
7. Make Delay: Erinnerung 10 Minuten vorher an dich.

Google-Sheets-Spalten:

```text
lead_id
erstellt_am
name
email
telefon
terminart
termin_start
termin_ende
adresse
interesse
notizen
lead_status
lead_temperatur
calendly_event_uri
fireflies_link
zusammenfassung
```

Statuswerte:

```text
neu
telefoniert
termin vereinbart
angebot gesendet
abschluss
verloren
```

Lead-Temperatur:

```text
kalt
warm
heiss
```

## Make-Szenario 2: Telefonat nachbereiten

Trigger:

- Fireflies.ai: Meeting Summary Created
- Alternative: Fireflies-E-Mail an Make Mailhook weiterleiten

Aktionen:

1. Fireflies-Zusammenfassung auslesen.
2. Lead in Google Sheets ueber E-Mail oder Telefonnummer suchen.
3. Zusammenfassung in der Spalte `zusammenfassung` speichern.
4. Lead-Temperatur setzen:
   - `heiss`, wenn Kunde zeitnah kaufen oder Vor-Ort-Termin will
   - `warm`, wenn Interesse klar ist, aber noch Entscheidung offen
   - `kalt`, wenn nur allgemeine Information gewuenscht ist
5. Wenn Vor-Ort-Termin sinnvoll ist: Google-Calendar-Eintrag erstellen.
6. Gmail: Zusammenfassung an dich senden.

Google-Calendar-Beschreibung fuer Vor-Ort-Termin:

```text
Kunde: {{name}}
Telefon: {{telefon}}
E-Mail: {{email}}
Adresse: {{adresse}}
Interesse: {{interesse}}
Lead: {{lead_temperatur}}

Zusammenfassung:
{{zusammenfassung}}

Notizen:
{{notizen}}
```

## E-Mail-Texte

### Bestaetigung an Kunden

Betreff: Ihr Termin mit Binder Hausberatung

Hallo {{name}},

vielen Dank fuer Ihre Buchung.

Ihr Termin:
{{terminart}}
{{termin_start}}

Kostenlos & unverbindlich. Wenn es um ein Telefonat geht, rufen wir Sie zur gebuchten Zeit an.

Hinweis: Das Gespraech kann aufgezeichnet und automatisch zusammengefasst werden, damit die Beratung besser
vorbereitet werden kann.

Viele Gruesse
Benedikt Binder

### Benachrichtigung an dich

Betreff: Neuer Termin: {{terminart}}

Neuer Termin:

- Name: {{name}}
- Telefon: {{telefon}}
- E-Mail: {{email}}
- Terminart: {{terminart}}
- Zeit: {{termin_start}}
- Adresse: {{adresse}}
- Interesse: {{interesse}}

### Erinnerung an Kunden 24 Stunden vorher

Betreff: Erinnerung an Ihren Termin morgen

Hallo {{name}},

kurze Erinnerung an unseren Termin:

{{terminart}}
{{termin_start}}

Wenn moeglich, halten Sie Fotos, grobe Masse und kurze Notizen zum Anliegen bereit.

Viele Gruesse
Benedikt Binder

## Fireflies.ai

Fireflies muss mit dem Kalender verbunden werden. Danach tritt Fireflies automatisch in passende Online-Termine ein
oder verarbeitet den Telefontermin je nach Telefonie-Setup.

Wichtig fuer Datenschutz und Vertrauen:

- Hinweis auf der Website anzeigen
- Hinweis in der Bestaetigungs-E-Mail senden
- Datenschutzerklaerung um Fireflies.ai, Calendly, Make.com und Google erweitern
- Auftragsverarbeitungsvertraege der Anbieter pruefen

## Was noch gebraucht wird

Diese echten Daten muessen eingesetzt werden:

- Calendly-Link Telefonat
- Calendly-Link Vor-Ort-Termin
- Google-Konto fuer Calendar und Sheets
- Make.com-Konto
- Fireflies.ai-Konto
- E-Mail-Absender
- WhatsApp-Benachrichtigung ueber WhatsApp Business Cloud API, Twilio oder CallMeBot
