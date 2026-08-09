import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/header";
import { odus } from "@/data/odus";

export default async function OduPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const odu = odus.find((item) => item.slug === slug);

  if (!odu) {
    notFound();
  }

  return (
    <div>
      <Header />
      <div className="h-8" />

      <main className="flex min-h-screen flex-col items-center px-4 py-10">
        <div className="w-full max-w-140 mx-auto">
          <Link
            href="/odus"
            className="mb-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#9a3d15] transition hover:text-[#e75a18]"
          >
            ← Voltar para Odus
          </Link>

          <section className="text-center mx-auto mb-8">
            <h1 className="title-section mx-auto mb-4">{odu.nome}</h1>
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.25em] text-[#9a3d15]">
              {odu.titulo}
            </p>
          </section>
        </div>

        <div className="text-content mx-auto w-full max-w-140 text-justify">
          <section className="space-y-5">
            <h2 className="mb-4 text-lg font-semibold">Descrição</h2>
            <p className="whitespace-pre-line text-sm leading-7">{odu.descricao}</p>
          </section>

          <div className="h-4" />

          <section className="space-y-5">
            <h2 className="mb-4 text-lg font-semibold">Origem</h2>
            <p className="whitespace-pre-line text-sm leading-7">{odu.origem}</p>
          </section>
          <div className="h-4" />

          <section className="space-y-5">
            <h2 className="mb-4 text-lg font-semibold">Simbolos</h2>
            <p className="whitespace-pre-line text-sm leading-7">{odu.simbolos}</p>
          </section>
          <div className="h-4" />
          <section className="space-y-5">
            <h2 className="mb-4 text-lg font-semibold">Orixas relacionados</h2>
            <p className="whitespace-pre-line text-sm leading-7">{odu.orixas}</p>
          </section>
          <div className="h-4" />
          <section className="space-y-5">
            <h2 className="mb-4 text-lg font-semibold">Características dos filhos</h2>
            <p className="whitespace-pre-line text-sm leading-7">{odu.caracteristicas}</p>
          </section>
          <div className="h-4" />
          <section className="space-y-5">
            <h2 className="mb-4 text-lg font-semibold">Itan</h2>
            <p className="whitespace-pre-line text-sm leading-7">{odu.itan}</p>
          </section>
          <div className="h-4" />
          <section className="space-y-5">
            <h2 className="mb-4 text-lg font-semibold">Ensinamento</h2>
            <p className="whitespace-pre-line text-sm leading-7">{odu.ensinamento}</p>
          </section>
        </div>
      </main>
    </div>
  );
}
