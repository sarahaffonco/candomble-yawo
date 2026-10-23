import Header from "@/components/header/Header";
import { vocabularioPorLetra } from "@/data/vocabulario";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function VocabularioLetraPage({
  params,
}: {
  params: Promise<{ letra: string }>;
}) {
  const { letra } = await params;
  const normalizedLetter = letra.toLowerCase();

  if (!/^[a-z]$/.test(normalizedLetter)) {
    notFound();
  }

  const words = vocabularioPorLetra[normalizedLetter] ?? [];

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center px-4 py-12">
        <section className="w-full max-w-190">
          <h1 className="title-card mb-8 text-center text-2xl font-semibold">
            Palavras com {normalizedLetter.toUpperCase()}
          </h1>

          {words.length > 0 ? (
            <dl className="divide-y divide-[#e5d2bd]">
              {words.map(({ palavra, traducao }) => (
                <div
                  key={palavra}
                  className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6"
                >
                  <dt className="text-content font-semibold">{palavra}</dt>
                  <dd className="text-content">{traducao}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="text-content py-4 text-center">
              Ainda não há palavras cadastradas para esta letra.
            </p>
          )}

          <Link
            href="/vocabulario"
            className="mt-8 inline-block text-sm font-semibold text-[#9a3d15] transition hover:text-[#e75a18]"
          >
            Voltar ao alfabeto
          </Link>
        </section>
      </main>
    </div>
  );
}