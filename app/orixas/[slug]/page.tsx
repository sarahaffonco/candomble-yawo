import { notFound } from "next/navigation";
import { orixas } from "@/data/orixas";

export default async function OrixaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const orixa = orixas.find(
    (item) => item.slug === slug
  );

  if (!orixa) {
    notFound();
  }

  return (
    <div>
      <h1>{orixa.nome}</h1>
      <p>Cor: {orixa.cor}</p>
    </div>
  );
}