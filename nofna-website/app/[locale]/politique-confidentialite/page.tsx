export default function PolitiqueConfidentialitePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-green-900 mb-6">
        Politique de confidentialité
      </h1>

      <div className="prose max-w-none text-gray-700 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Données collectées
          </h2>
          <p>
            Dans le cadre de l&apos;utilisation de ce site, NOFNA peut collecter
            certaines données personnelles (nom, adresse e-mail) via le
            formulaire de contact et l&apos;inscription à la newsletter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Utilisation des données
          </h2>
          <p>
            Les données collectées sont utilisées uniquement pour répondre
            aux demandes de contact et informer les personnes inscrites des
            actualités de l&apos;organisation. Elles ne sont ni vendues ni
            transmises à des tiers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Vos droits
          </h2>
          <p>
            Conformément à la réglementation en vigueur, vous disposez d&apos;un
            droit d&apos;accès, de rectification et de suppression de vos
            données. Pour toute demande, contactez-nous via la page{" "}
            <a href="/contact" className="text-green-700 underline">
              Contact
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}