import Header from "@/components/header/Header";
import Link from "next/link";

const alphabet = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index),
);

export default function Vocabulario() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center  gap-5">
        <header className="mb-10 text-center">
          <h1 className="title-card text-2xl font-semibold leading-tight sm:text-3xl">
            Vocabulário
          </h1>
        </header>
        <p className="text-content mx-auto max-w-190 whitespace-pre-line text-justify">
          {` A linguagem ocupa um lugar fundamental na transmissão dos conhecimentos do Candomblé. Palavras, expressões e nomes utilizados no cotidiano da comunidade carregam significados relacionados à sua história, à cosmologia, aos Orixás, às relações entre seus membros e às diferentes formas de compreender e vivenciar a tradição.

Nesta seção, reunimos um vocabulário básico do Candomblé Ketu, tendo como referência a matriz cultural e linguística iorubá. A proposta é apresentar, de maneira acessível e contextualizada, alguns dos termos encontrados nos estudos, nas narrativas e nas vivências relacionadas a essa tradição.

Mais do que simplesmente traduzir palavras, este espaço busca apresentar seus significados dentro do contexto do Candomblé, considerando que determinados termos podem adquirir sentidos específicos conforme a situação em que são utilizados.

A grafia de palavras de origem iorubá também pode aparecer de diferentes maneiras em livros, estudos e registros mais antigos. Por isso, sempre que necessário, serão apresentadas outras formas de escrita e informações que auxiliem na compreensão do termo.

É importante lembrar que o vocabulário não é separado da vivência. Muitas palavras estão relacionadas a conhecimentos que são transmitidos dentro das casas de Candomblé, por meio da oralidade, da convivência, da experiência e da orientação dos mais velhos. Dessa forma, uma definição encontrada nesta plataforma possui caráter introdutório e educativo e não substitui os ensinamentos transmitidos dentro de cada comunidade.

As definições apresentadas nesta seção são construídas a partir de fontes bibliográficas e estudos relacionados ao Candomblé Ketu e à cultura iorubá, buscando valorizar pesquisadores, autores e detentores de conhecimentos que contribuíram para o registro e a preservação dessa tradição. `}
        </p>

        <nav aria-label="Alfabeto do vocabulário" className="mx-auto w-full max-w-190 px-4 pb-12">
          <h2 className="title-card mb-5 text-center text-xl font-semibold">
            Consulte por letra
          </h2>
          <div className="grid grid-cols-5 gap-2 sm:grid-cols-7 md:grid-cols-13">
            {alphabet.map((letter) => (
              <Link
                key={letter}
                href={`/vocabulario/${letter.toLowerCase()}`}
                className="flex aspect-square items-center justify-center border border-[#d8b28c] text-lg font-semibold text-[#4b2310] transition-colors hover:bg-[#f5e4d1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a3d15]"
              >
                {letter}
              </Link>
            ))}
                     <Link
              href="/vocabulario/frases"
              className="flex aspect-square items-center justify-center border border-[#d8b28c] px-2 text-sm font-semibold text-[#4b2310] transition-colors hover:bg-[#f5e4d1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a3d15]"
            >
              Frases
            </Link>
                        <Link
              href="/vocabulario/semana-mes"
              className="flex aspect-square items-center justify-center border border-[#d8b28c] px-2 text-sm font-semibold text-[#4b2310] transition-colors hover:bg-[#f5e4d1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a3d15]"
            >
              Semanas e meses
            </Link>
          </div>
        </nav>

                <aside className="text-little mx-auto max-w-190 whitespace-pre-line text-justify">
Nota: O vocabulário apresentado nesta página tem como recorte o
          Candomblé Ketu. Mesmo dentro dessa tradição, podem existir diferenças
          de grafia, pronúncia, significado e utilização dos termos entre casas,
          linhagens e contextos de transmissão. Essas diferenças fazem parte da
          riqueza e da continuidade da tradição.
        </aside>
      </main>
    </div>
  );
}
