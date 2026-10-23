import Header from "@/components/header/Header";
import Link from "next/link";

export default function VocabularioSemanaMesPage() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center px-4 py-12">
        <section className="w-full max-w-190">
          <h1 className="title-card mb-8 text-center text-2xl font-semibold">
            Semanas 
          </h1>
          <dl className="divide-y divide-[#e5d2bd]">
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Ararekolê</dt>
              <dd className="text-content">Como vai?</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">
                Ọjọ́ Ajé
              </dt>
              <dd className="text-content"> Segunda-feira.</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Ọjọ́ Ìṣẹ́gun</dt>
              <dd className="text-content"> Terça-feira</dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Ọjọ́rú </dt>
              <dd className="text-content"> Quarta-feira</dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Ọjọ́bọ </dt>
              <dd className="text-content"> Quinta-feira</dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Ọjọ́ Ẹtì</dt>
              <dd className="text-content"> Sexta-feira</dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Ọjọ́ Àbámẹ́ta</dt>
              <dd className="text-content">Sabádo</dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Ọjọ́ Àìkú</dt>
              <dd className="text-content"> Domingo </dd>
            </div>
                <h1 className="title-card mb-8 text-center text-2xl font-semibold mt-8">
            Meses 
          </h1>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Oṣù Ṣẹ́rẹ́</dt>
              <dd className="text-content"> Janeiro </dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Oṣù Èrèlè</dt>
              <dd className="text-content"> Fevereiro</dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Oṣù Ẹrẹ̀nà</dt>
              <dd className="text-content"> Março</dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Oṣù Ìgbé</dt>
              <dd className="text-content"> Abril </dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Oṣù Ẹ̀bibi</dt>
              <dd className="text-content">Maio</dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Oṣù Òkúdu</dt>
              <dd className="text-content"> Junho </dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Oṣù Agẹmọ</dt>
              <dd className="text-content"> Julho </dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Oṣù Ògún</dt>
              <dd className="text-content"> Agosto</dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Oṣù Owewe</dt>
              <dd className="text-content"> Setembro</dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Oṣù Ọ̀wàrà</dt>
              <dd className="text-content"> Outubro</dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Oṣù Bélú</dt>
              <dd className="text-content"> Novembro </dd>
            </div>
                <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Oṣù Ọ̀pẹ̀</dt>
              <dd className="text-content">Dezembro</dd>
            </div>
          </dl>
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