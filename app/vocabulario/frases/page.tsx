import Header from "@/components/header/Header";
import Link from "next/link";

export default function VocabularioFrasesPage() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center px-4 py-12">
        <section className="w-full max-w-190">
          <h1 className="title-card mb-8 text-center text-2xl font-semibold">
            Frases em iorubá
          </h1>
          <dl className="divide-y divide-[#e5d2bd]">
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Ararekolê</dt>
              <dd className="text-content">Como vai?</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">
                Inú mi dùn láti pàdé rẹ é
              </dt>
              <dd className="text-content">Prazer em conhecer você.</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Mo wà dáadáa</dt>
              <dd className="text-content">Estou bem</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E káàáró</dt>
              <dd className="text-content">Bom dia</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E káàsán</dt>
              <dd className="text-content">Boa tarde</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E kú alé</dt>
              <dd className="text-content">Boa noite</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E káàbó</dt>
              <dd className="text-content">Olá / Alo</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E kàábò sí ilé wa</dt>
              <dd className="text-content">Bem vindo à nossa casa</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Báwo ni</dt>
              <dd className="text-content">Como vai?</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">
                Alàáfíà ni, ìwo n kó
              </dt>
              <dd className="text-content">Estou bem, e você?</dd>
            </div>

            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E séun</dt>
              <dd className="text-content">Obrigada</dd>
            </div>

            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E jòwó</dt>
              <dd className="text-content">Por favor</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Pèlé</dt>
              <dd className="text-content">Desculpa</dd>
            </div>

            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E kú àárò o</dt>
              <dd className="text-content">Bom dia a todos</dd>
            </div>

            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E kú alé o </dt>
              <dd className="text-content">Boa noite a todos</dd>
            </div>

            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E kú òsán o </dt>
              <dd className="text-content">Boa tarde a todos</dd>
            </div>

            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E dó púpó</dt>
              <dd className="text-content">Muito Obrigada</dd>
            </div>

            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Kò tópé</dt>
              <dd className="text-content">De nada</dd>
            </div>

            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E kú ojó ìbí</dt>
              <dd className="text-content">Feliz aniversário</dd>
            </div>

            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">E kú ìbànújé</dt>
              <dd className="text-content">Meus pêsames</dd>
            </div>

            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Ìrìn àjò rere</dt>
              <dd className="text-content">Boa viagem</dd>
            </div>

            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">
                Ká tún rí ara fójó míràn
              </dt>
              <dd className="text-content">Volte sempre</dd>
            </div>

            <div className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6">
              <dt className="text-content font-semibold">Ó dàbò</dt>
              <dd className="text-content">Até logo</dd>
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
