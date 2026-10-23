import Header from "@/components/header/Header";
import Image from "next/image";

export default function SobreCandomble() {
  return (
    <>
      <Header />
      <br></br>

      <main className="flex min-h-screen flex-col items-center justify-center  gap-5">
        <h1 className=" title-card mb-3 max-w-260 text-center text-sm font-semibold leading-tight">
          Memória Cultural do Candomblé Ketu no Brasil
        </h1>
        <p className=" text-content mx-auto max-w-190 whitespace-pre-line text-justify ">
          {`A memória cultural é parte fundamental da história e da continuidade do Candomblé. Por meio da tradição oral, dos conhecimentos transmitidos pelos mais velhos, das histórias das comunidades e da preservação dos espaços sagrados, diferentes gerações contribuíram para manter vivos os saberes, as práticas e a ancestralidade que constituem essa tradição.

No Brasil, o Candomblé Ketu desenvolveu-se a partir de heranças culturais e religiosas relacionadas aos povos iorubás da África Ocidental, especialmente no contexto da cidade de Salvador, na Bahia. Sua formação está profundamente ligada à história da população negra, à diáspora africana, à resistência à escravidão e à organização de comunidades que encontraram formas de preservar e reconstruir seus conhecimentos em território brasileiro.

A história do Candomblé Ketu é marcada pela atuação de mulheres e homens que, mesmo diante de perseguições, discriminações e dificuldades sociais, contribuíram para a continuidade de suas comunidades. Entre essas pessoas, destacam-se sacerdotisas que tiveram papel fundamental na organização dos terreiros, na transmissão dos conhecimentos religiosos e na preservação da memória ancestral.

Os terreiros históricos de Salvador, como a Casa Branca do Engenho Velho, o Gantois e o Ilê Axé Opô Afonjá, constituem importantes referências dessa trajetória. Suas histórias estão relacionadas à formação, à continuidade e à expansão de diferentes comunidades de tradição Ketu, além de representarem espaços de preservação cultural, convivência, transmissão de conhecimentos e resistência.

Ao longo do tempo, essas comunidades também contribuíram para a valorização do patrimônio cultural afro-brasileiro, fortalecendo o reconhecimento dos terreiros como espaços históricos, religiosos e sociais. A preservação desses lugares representa não apenas a proteção de edificações, mas também o reconhecimento das pessoas, das histórias, dos conhecimentos e das práticas que dão sentido a esses espaços.

Esta seção apresenta alguns dos principais marcos históricos e personagens relacionados à trajetória do Candomblé Ketu no Brasil, destacando a importância dos terreiros, das lideranças religiosas e dos pesquisadores que contribuíram para registrar e preservar parte dessa história.

Conhecer essa memória é reconhecer a importância da ancestralidade, da resistência e da transmissão de saberes na construção da cultura afro-brasileira. É também compreender que a história do Candomblé continua sendo construída pelas comunidades que mantêm suas tradições vivas, preservando conhecimentos e fortalecendo suas identidades.

A memória cultural não pertence apenas ao passado. Ela permanece presente nas comunidades, nas histórias transmitidas, nos espaços sagrados e nas práticas que atravessam gerações. Preservá-la é valorizar a história, respeitar seus protagonistas e reconhecer a importância do Candomblé Ketu como parte do patrimônio cultural brasileiro.`}
        </p>
      <section className="mx-auto flex w-full max-w-190 flex-col items-center gap-5 px-4 text-justify">
        <h2 className="subtitle text-center align-center items-center mb-4">
          Principais marcos históricos do Candomblé Ketu
        </h2>
        <p className="w-full whitespace-pre-line text-justify">
          {`Para complementar a introdução, eu organizaria a página com uma linha do tempo, destacando os acontecimentos que ajudam a compreender a formação e a preservação dessa tradição.`}
        </p>

        <h2 className="subtitle  text-center align-center items-center ">
          Século XIX — Formação das comunidades de Candomblé em Salvador
        </h2>
        <p className="w-full whitespace-pre-line text-justify">
          {`Durante o século XIX, comunidades negras africanas e afro-brasileiras organizaram espaços de culto, sociabilidade e transmissão de conhecimentos em Salvador. A história dos primeiros terreiros está relacionada à diáspora africana, às experiências de pessoas escravizadas e libertas e às redes de solidariedade construídas na cidade.
                A formação da tradição Ketu em Salvador envolveu pessoas de diferentes origens africanas, e sua história não pode ser reduzida a uma única origem étnica ou cidade africana.`}
        </p>

        <h2 className="subtitle  text-center align-center items-center ">
          Por volta de 1830 — Casa Branca do Engenho Velho
        </h2>
        <p className="w-full whitespace-pre-line text-justify">
          {`A tradição histórica associa a formação do Ilê Axé Iyá Nassô Oká, conhecido como Terreiro da Casa Branca, às sacerdotisas Iyá Nassô, Iyá Adetá e Iyá Kalá, em Salvador.

A Casa Branca tornou-se uma referência fundamental na história do Candomblé Ketu e está relacionada à formação de outras importantes comunidades religiosas da cidade. A data de fundação e alguns detalhes sobre suas primeiras lideranças são reconstruídos a partir de tradições orais e estudos históricos.
                `}
        </p>

        <h2 className="subtitle  text-center align-center items-center ">
          Século XIX — Formação do Gantois
        </h2>
        <p className="w-full whitespace-pre-line text-justify">
          {`O Ilê Iyá Omi Axé Iyamassê, conhecido como Terreiro do Gantois, consolidou-se como uma das importantes casas de tradição Ketu em Salvador.

Sua história está relacionada à trajetória de Maria Júlia da Conceição Nazaré e às relações históricas com a Casa Branca. Pesquisas documentais e etnográficas têm contribuído para compreender a formação da comunidade e a trajetória de seus fundadores.
                `}
        </p>

        <h2 className="subtitle  text-center align-center items-center ">
          1910 — Fundação do Ilê Axé Opô Afonjá
        </h2>
        <p className="w-full whitespace-pre-line text-justify">
          {`O Ilê Axé Opô Afonjá foi fundado em Salvador por Eugênia Anna dos Santos, conhecida como Mãe Aninha, tornando-se uma das principais referências do Candomblé Ketu.

Ao longo de sua história, o terreiro foi conduzido por importantes sacerdotisas, que contribuíram para a continuidade de seus conhecimentos, sua organização comunitária e sua presença na vida cultural brasileira.
                `}
        </p>

        <h2 className="subtitle  text-center align-center items-center ">
          1930–1940 — Perseguições e resistência religiosa
        </h2>
        <p className="w-full whitespace-pre-line text-justify">
          {`Durante parte do século XX, comunidades de Candomblé enfrentaram perseguições policiais, apreensões de objetos religiosos e restrições ao exercício de suas práticas.

Nesse contexto, lideranças religiosas atuaram na defesa de suas comunidades e na busca pelo reconhecimento e pela liberdade de culto. Mãe Aninha foi uma das figuras importantes dessa mobilização.
                `}
        </p>

        <h2 className="subtitle  text-center align-center items-center ">
          1982–1986 — Reconhecimento patrimonial da Casa Branca
        </h2>
        <p className="w-full whitespace-pre-line text-justify">
          {`O Terreiro da Casa Branca recebeu reconhecimento municipal em 1982 e foi tombado pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN), com homologação em 1986.

Esse processo representou um marco no reconhecimento dos terreiros como patrimônio histórico e cultural brasileiro.
                `}
        </p>
  </section>
        <h2 className="subtitle  text-center align-center items-center ">
          Grandes nomes da história do Ketu
        </h2>
        <section className="mx-auto w-full max-w-190 px-4">
          <div className="space-y-6">
            <section className="flex flex-col items-center gap-8 md:flex-row md:items-stretch">
              <div className="flex w-full items-center justify-center md:w-1/3">
                <Image
                  src="/images/memoria/maeaninha.jpg"
                  alt="retrato mae aninha"
                  width={100}
                  height={100}
                  className="h-auto w-full max-w-56 object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="mb-2 font-semibold">
                  Mãe Aninha — Eugênia Anna dos Santos
                </h3>
                <p className="text-little">1869–1938</p>

                <p className="text-justify">
                  Fundadora do Ilê Axé Opô Afonjá, Mãe Aninha teve papel
                  importante na organização e no fortalecimento do Candomblé.
                  Sua trajetória é marcada pela defesa da liberdade religiosa e
                  pela preservação dos conhecimentos transmitidos em sua
                  comunidade.
                </p>
              </div>
            </section>

            <section className="flex flex-col items-center gap-8 md:flex-row md:items-stretch">
              <div className="flex w-full items-center justify-center md:w-1/3">
                <Image
                  src="/images/memoria/maemenininha.jpg"
                  alt="Imagem Mae Menininha do Gantois"
                  width={200}
                  height={200}
                  className="h-auto w-full max-w-56 object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="mb-2 font-semibold">
                  Mãe Menininha do Gantois — Maria Escolástica da Conceição
                  Nazaré
                </h3>
                <p className="text-little">1894–1986</p>

                <p  className="text-justify">
                  Ialorixá do Gantois entre 1922 e 1986, Mãe Menininha tornou-se
                  uma das lideranças religiosas mais conhecidas do Brasil. Sua
                  trajetória contribuiu para ampliar a visibilidade do Candomblé
                  e fortalecer a continuidade da tradição em sua comunidade.
                </p>
              </div>
            </section>

            <section className="flex flex-col items-center gap-8 md:flex-row md:items-stretch">
              <div className="flex w-full items-center justify-center md:w-1/3">
                <Image
                  src="/images/memoria/mae-senhora.webp"
                  alt="Retrato de Mae Senhora"
                  width={200}
                  height={200}
                  className="h-auto w-full max-w-56 object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="mb-2 font-semibold">
                  Mãe Senhora — Maria Bibiana do Espírito Santo
                </h3>
                <p className="text-little">1890–1967</p>

                <p className="text-justify">
                  Sacerdotisa do Ilê Axé Opô Afonjá, sucedeu Mãe Aninha e
                  contribuiu para a continuidade e o fortalecimento da casa. Sua
                  liderança integra uma importante trajetória de transmissão dos
                  conhecimentos religiosos e de preservação da comunidade.
                </p>
              </div>
            </section>

            <section className="flex flex-col items-center gap-8 md:flex-row md:items-stretch">
              <div className="flex w-full items-center justify-center md:w-1/3">
                <Image
                  src="/images/memoria/stella.jpeg"
                  alt="Retrato Mãe Stella"
                  width={200}
                  height={200}
                  className="h-auto w-full max-w-56 object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="mb-2 font-semibold">
                  Mãe Stella de Oxóssi — Maria Stella de Azevedo Santos
                </h3>
                <p className="text-little">1925–2018</p>

                <p className="text-justify">
                  Ialorixá do Ilê Axé Opô Afonjá, Mãe Stella foi também
                  escritora e importante referência na valorização dos
                  conhecimentos do Candomblé. Sua atuação contribuiu para a
                  preservação da memória, a produção de conhecimento e o
                  reconhecimento cultural da tradição.
                </p>
              </div>
            </section>
            <h2 className="subtitle  text-center align-center items-center ">
          Memória que continua viva
        </h2>
            <p className="text-justify">{`A memória cultural do Candomblé Ketu não pertence somente ao passado. Ela continua presente nos terreiros, nas famílias de axé, nos cânticos, nas narrativas, nos conhecimentos transmitidos oralmente e nas experiências das novas gerações.

Registrar essa história é reconhecer a contribuição de pessoas e comunidades que preservaram seus saberes mesmo diante de perseguições, racismo e tentativas de deslegitimação de suas práticas religiosas.

Esta plataforma busca colaborar com esse processo por meio da organização e da divulgação responsável de informações históricas e culturais. Cada registro deve ser compreendido como parte de uma história coletiva, construída por muitas vozes e transmitida de diferentes maneiras.

Preservar a memória do Candomblé é valorizar seus protagonistas, reconhecer a importância dos terreiros e respeitar os conhecimentos que continuam vivos nas comunidades.`}
</p>
          </div>
        </section>
        <aside className="text-little ">
          Referências e leituras:
          <ul className="list-disc pl-5">
            <li>
              Cambridge University Press — The “Ketu Nation” of Brazilian
              Candomblé in Historical Context.
            </li>
            <li>Salvador Capital Afro — Terreiro da Casa Branca.</li>
            <li>
              Revista de História / USP — O terreiro do Gantois: redes sociais e
              etnografia histórica no século XIX.
            </li>
            <li>Governo da Bahia — Mãe Aninha e o Ilê Axé Opô Afonjá.</li>
            <li>
              Fundação Joaquim Nabuco — Mãe Stella de Oxóssi /
              mae-menininha-do-gantois
            </li>
          </ul>
        </aside>
      </main>
    </>
  );
}
