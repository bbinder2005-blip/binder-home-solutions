import { Layout } from "@/components/layout/Layout";

const Impressum = () => {
  return (
    <Layout>
      <section className="section-padding bg-background pt-32">
        <div className="container-width max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-foreground mb-8">
            Impressum
          </h1>

          <div className="prose prose-neutral max-w-none font-body">
            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-muted-foreground">
              Benedikt Binder<br />
              Fachberatung Binder<br />
              [Straße und Hausnummer]<br />
              [PLZ Ort]<br />
              Deutschland
            </p>

            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              Kontakt
            </h2>
            <p className="text-muted-foreground">
              Telefon: 0151 11073043<br />
              E-Mail: info@fachberatung-binder.de
            </p>

            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              Umsatzsteuer-ID
            </h2>
            <p className="text-muted-foreground">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [USt-IdNr. falls vorhanden]
            </p>

            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p className="text-muted-foreground">
              Berufsbezeichnung: Fachberater für Bauelemente und Sonnenschutz<br />
              Zuständige Kammer: [Kammer]<br />
              Verliehen in: Deutschland
            </p>

            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              Streitschlichtung
            </h2>
            <p className="text-muted-foreground">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
              <br /><br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              Haftung für Inhalte
            </h2>
            <p className="text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
              Tätigkeit hinweisen.
            </p>

            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              Haftung für Links
            </h2>
            <p className="text-muted-foreground">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
              Seiten verantwortlich.
            </p>

            <h2 className="font-display text-2xl font-medium text-foreground mt-8 mb-4">
              Urheberrecht
            </h2>
            <p className="text-muted-foreground">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
