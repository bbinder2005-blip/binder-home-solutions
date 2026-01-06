import { Layout } from "@/components/layout/Layout";

const Datenschutz = () => {
  return (
    <Layout>
      <section className="section-padding bg-background pt-32">
        <div className="container-width max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-foreground mb-8">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-neutral max-w-none font-body">
            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            
            <h3 className="font-display text-xl font-medium text-foreground mt-6 mb-3">
              Allgemeine Hinweise
            </h3>
            <p className="text-muted-foreground">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="font-display text-xl font-medium text-foreground mt-6 mb-3">
              Datenerfassung auf dieser Website
            </h3>
            <p className="text-muted-foreground">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              2. Hosting
            </h2>
            <p className="text-muted-foreground">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            
            <h3 className="font-display text-xl font-medium text-foreground mt-6 mb-3">
              Datenschutz
            </h3>
            <p className="text-muted-foreground">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="font-display text-xl font-medium text-foreground mt-6 mb-3">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="text-muted-foreground">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Benedikt Binder<br />
              Fachberatung Binder<br />
              Telefon: 0151 11073043<br />
              E-Mail: info@fachberatung-binder.de
            </p>

            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              4. Datenerfassung auf dieser Website
            </h2>
            
            <h3 className="font-display text-xl font-medium text-foreground mt-6 mb-3">
              Kontaktformular
            </h3>
            <p className="text-muted-foreground">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h3 className="font-display text-xl font-medium text-foreground mt-6 mb-3">
              Anfrage per E-Mail, Telefon oder WhatsApp
            </h3>
            <p className="text-muted-foreground">
              Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive 
              aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der 
              Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>

            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              5. Ihre Rechte
            </h2>
            <p className="text-muted-foreground">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
              personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung 
              sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren 
              Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              6. Cookies
            </h2>
            <p className="text-muted-foreground">
              Diese Website verwendet keine Cookies, die eine Einwilligung erfordern. 
              Technisch notwendige Cookies können verwendet werden, um die Funktionalität 
              der Website sicherzustellen.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
