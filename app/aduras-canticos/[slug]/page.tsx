import { notFound } from "next/navigation";
import { adurasCanticos } from "@/data/adurasCanticos";
import Header from "@/components/header";
import Link from "next/link";


export default async function AdurasCanticosPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const adurasCanticosItem = adurasCanticos.find((item) => item.slug === slug);

  if (!adurasCanticosItem) {
    notFound();
  }

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center px-4 py-10">
        <div className="h-4" />
        <div className="w-full max-w-295">
          <h1 className="title-card mx-auto mb-8 items-center  max-w-195 ">
            {adurasCanticosItem.nome}
          </h1>
        </div>
        <div className="h-4" />

        <div className="grid w-full max-w-295 gap-8 md:grid-cols-2 md:items-start md:justify-items-center">
          <div className="text-content mx-auto w-full max-w-140 text-justify">
            <h2 className="mb-4 text-lg font-semibold">Adura</h2>
            <p className="whitespace-pre-line text-sm leading-7">
              {adurasCanticosItem.adura}
            </p>
          </div>

          <div className="text-content mx-auto w-full max-w-140 text-justify">
            <h2 className="mb-4  text-lg font-semibold">Tradução</h2>
            <p className="whitespace-pre-line text-sm leading-7">
              {adurasCanticosItem.traducao}
            </p>
          </div>

          <Link
            href="/aduras-canticos"
            className="mb-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#9a3d15] transition hover:text-[#e75a18]"
          >
            ← Voltar para Aduras
          </Link>
        </div>
      </main>
    </div>
  );
}
