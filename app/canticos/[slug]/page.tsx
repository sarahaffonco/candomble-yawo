import Header from "@/components/header";

type CanticoPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CanticoPage({ params }: CanticoPageProps) {
  const { slug } = await params;

  return (
    <div>
      <Header />
      <main className="container-custom section-spacing">
        <h1 className="title-section text-center">Cantico</h1>
        <p className="mt-4 text-center text-sm font-medium text-[#6b2a12]">{slug}</p>
      </main>
    </div>
  );
}
