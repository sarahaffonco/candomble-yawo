import { notFound } from "next/navigation";
import Image from "next/image";
import { orixas } from "@/data/orixas";
import Header from "@/components/header";

export default async function OrixaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const orixa = orixas.find((item) => item.slug === slug);

  if (!orixa) {
    notFound();
  }

  return (
    <div>
      <Header />
      <div className="h-8" />
      <main className="min-h-screen py-10">
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "24px",
          }}
        >
          <h1 className="title-main text-center mb-8">{orixa.nome}</h1>

          <div className="flex justify-center mb-10">
            <Image
              src={orixa.imagem}
              alt={orixa.nome}
              width={400}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="h-8" />

          <div className="space-y-16 text-justify">
            {/* Descrição principal */}
            <p className="text-content leading-loose">{orixa.descricao}</p>

            {/* Domínio */}
            <div className="h-2"></div>
            <section className="space-y-5">
              <h2 className="title-card mb-4">Domínio</h2>
              <p className="text-content leading-loose">{orixa.dominio}</p>
            </section>

            {/* Características */}
            <div className="h-2"></div>

            <section>
              <h2 className="title-card mb-4">Características</h2>
              <p className="text-content leading-loose">
                {orixa.caracteristicaOrixa}
              </p>
            </section>

            {/* Cor */}
            <div className="h-2"></div>

            <section>
              <h2 className="title-card mb-4">Cor</h2>
              <p className="text-content leading-loose">{orixa.cor}</p>
            </section>

            {/* Dia da Semana */}
            <div className="h-2"></div>

            <section>
              <h2 className="title-card mb-4">Dia da Semana</h2>
              <p className="text-content leading-loose">{orixa.semana}</p>
            </section>

            {/* Características dos Filhos */}
            <div className="h-2"></div>

            <section>
              <h2 className="title-card mb-4">Características dos Filhos</h2>
              <p className="text-content leading-loose">
                {orixa.caracteristicasFilhos}
              </p>
            </section>

            {/* Qualidades */}
            <div className="h-2"></div>

            <section className="pt-4">
              <div className="h-2"></div>

              <h2 className="title-card mb-8">Qualidades</h2>
              <div className="h-2"></div>

              {orixa.qualidades.map((qualidade) => (
                <article
                  key={qualidade.nome}
                  className="space-y-6 mb-14 last:mb-0"
                >
                  <div className="h-2"></div>
                  <h3 className="subtitle mb-6">{qualidade.nome}</h3>

                  <div className="h-2"></div>
                  <div className="space-y-4 text-content">
                    <p className="leading-loose ">
                      <strong>Características:</strong>{" "}
                      {qualidade.caracteristicas}
                    </p>

                    <p className="leading-loose">
                      <strong>História Mítica:</strong> {qualidade.historia}
                    </p>

                    <p className="leading-loose">
                      <strong>Cores e Vestimentas:</strong> {qualidade.cores}
                    </p>

                    <p className="leading-loose">
                      <strong>Ligação Principal:</strong> {qualidade.ligacao}
                    </p>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
