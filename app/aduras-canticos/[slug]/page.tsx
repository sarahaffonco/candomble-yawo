import { notFound } from "next/navigation";
import { adurasCanticos } from "@/data/adurasCanticos";

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
      <h1>{adurasCanticosItem.nome}</h1>
      <p> {adurasCanticosItem.traducao}</p>
            <p> {adurasCanticosItem.adura}</p>

    </div>
  );
}