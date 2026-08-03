import { notFound } from "next/navigation";
import { itans } from "@/data/itans";
import Header from "@/components/header";

export default async function itansPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const itan = itans.find((item) => item.slug === slug);

  if (!itan) {
    notFound();
  }

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center bg-[#f4c7a1] px-4 py-10">
        <div className="h-4" />
        <div className="w-full max-w-295 text-center">
          <h1 className="title-section mx-auto mb-8 max-w-195 ">{itan.nome}</h1>
        </div>
        <div className="h-4" />

        <div className="text-content mx-auto w-full max-w-140 text-justify">
          <h2 className="mb-4  text-lg font-semibold">{itan.nomeitan1}</h2>
          <p className="whitespace-pre-line text-sm leading-7">{itan.itan1}</p>
          <div className="h-4" />

          <h2 className="mb-4  text-lg font-semibold">{itan.nomeitan2}</h2>
          <p className="whitespace-pre-line text-sm leading-7">
            {itan.itan2}
            <div className="h-4" />
          </p>
          <h2 className="mb-4  text-lg font-semibold">{itan.nomeitan3}</h2>
          <p className="whitespace-pre-line text-sm leading-7">
            {itan.itan3}
            <div className="h-4" />
          </p>
          <h2 className="mb-4  text-lg font-semibold">{itan.nomeitan4}</h2>
          <p className="whitespace-pre-line text-sm leading-7">
            {itan.itan4}
            <div className="h-4" />
          </p>
          <h2 className="mb-4  text-lg font-semibold">{itan.nomeitan5}</h2>
          <p className="whitespace-pre-line text-sm leading-7">{itan.itan5}</p>
        </div>
      </main>
    </div>
  );
}
