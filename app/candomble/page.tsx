import Image from "next/image";
import Header from "@/components/header/Header";

export default function SobreCandomble() {
  return (
    <>
      <Header />
      <br></br>

      <main className="flex min-h-screen flex-col items-center justify-center  gap-5">
        <article className="mx-auto max-w-190">
          <header className="mb-10 text-center">
            <h1 className="title-card text-2xl font-semibold leading-tight sm:text-3xl">
              Um Elo Entre Dois Mundos
            </h1>
          </header>
          <div className="h-4" />
          <div className="text-content space-y-6 text-justify">
            <section>
              <p>
                O Candomblé é uma tradição religiosa e cultural marcada pela
                diversidade. Ao falar sobre Candomblé, é importante compreender
                que não existe uma única forma de organização, de culto, de
                transmissão dos conhecimentos ou de vivência que possa ser
                aplicada indistintamente a todas as casas e comunidades. Sua
                formação no Brasil está relacionada às diferentes populações
                africanas trazidas para o país durante o período da
                escravização, pertencentes a sociedades, povos e culturas
                diversas. Ao longo do tempo, esses diferentes patrimônios
                culturais estabeleceram relações entre si e também com o
                contexto brasileiro, dando origem a diferentes formas de
                organização e expressão das religiões de matriz africana. Essa
                diversidade pode ser percebida, entre outros aspectos, naquilo
                que tradicionalmente se convencionou chamar de “nações” do
                Candomblé. Entre as denominações encontradas na literatura estão
                Nagô ou Ketu, Jeje, Ijexá, Angola e Congo, entre outras. A
                divisão por nações está relacionada a diferentes heranças
                culturais e linguísticas africanas e às formas pelas quais esses
                conhecimentos foram preservados, transformados e transmitidos no
                Brasil. A linguista Yeda Pessoa de Castro, por exemplo, destaca
                a relação entre as diferentes nações e as línguas utilizadas em
                suas práticas e cerimônias.
              </p>

              <div className="flex justify-center py-8">
                <Image
                  src="/images/candomble.jpeg"
                  alt="Baiana negra com indumentárias religiosas"
                  width={280}
                  height={280}
                  className="h-auto w-full max-w-120 object-cover"
                />
              </div>
            </section>
            <div className="h-4" />

            <section>
              <h2 className="subtitle text-center align-center items-center mb-4">Diferentes heranças culturais</h2>

              <p>
                De maneira bastante geral, podemos encontrar tradições
                associadas a diferentes matrizes culturais. As tradições
                iorubás, frequentemente associadas aos Candomblés Nagô e Ketu,
                possuem forte presença dos conhecimentos relacionados aos
                Orixás, às narrativas tradicionais, à língua iorubá e a
                diferentes formas de organização ritual.
              </p>
            </section>
            <div className="h-4" />

            <section>
              <h2 className="subtitle  text-center align-center items-center ">
                Detalhando as Raízes
              </h2>

              <div className="space-y-6">
                <section className="flex flex-col items-center gap-8 md:flex-row md:items-stretch">
                  <div className="flex w-full items-center justify-center md:w-1/3">
                    <Image
                      src="/images/maria.jpg"
                      alt="Ilustração do continente africano com elementos culturais"
                      width={800}
                      height={200}
                      className="h-auto w-full max-w-md object-contain"
                    />
                  </div>
                   

                  <div className="flex-1">
                    <h3 className="mb-2 font-semibold">
                      Bantu (Angola e Congo)
                    </h3>

                    <p>
                      Apresentam referências culturais, linguísticas e
                      religiosas provenientes de diferentes povos da África
                      Centro-Ocidental. Estão entre as mais antigas no Brasil.
                      Sua cosmovisão baseia-se no culto aos Nkisis (forças da
                      natureza e ancestrais). A relação entre o mundo visível e
                      invisível é central, e a liturgia costuma ser mais voltada
                      para o culto à terra e aos ancestrais familiares.
                      
                    </p>
                     <figcaption className="mt-3 text-center text-sm font-medium text-[#f7a12d]">
                      Maria Neném (Mam'etu Tuenda dia Nzambi), dirigente do
                      Terreiro Tumbensi.
                    </figcaption>
                  </div>
                </section>

                <section className="flex flex-col items-center gap-8 md:flex-row md:items-stretch">
                  <div className="flex w-full items-center justify-center md:w-1/3">
                    <Image
                      src="/images/ludovina.jpeg"
                      alt="Ilustração do continente africano com elementos culturais"
                      width={200}
                      height={200}
                      className="h-auto w-full max-w-md object-contain"
                    />
                  </div>
                   

                  <div className="flex-1">
                  <h3 className="mb-2 font-semibold">Nação Jeje</h3>

                    <p>
                      Trazida pelos povos Fons e Ewes, vindos da região do antigo
                      Daomé. O culto foca nos Voduns. A organização ritual é
                      frequentemente associada a um rigor técnico e uma estrutura
                      litúrgica que influenciou profundamente outras nações no
                      Brasil.
                    </p>
                     <figcaption className="mt-3 text-center text-sm font-medium text-[#f7a12d]">
                      Ludovina Pessoa (Gaiaku Ludovina de Agé ), dirigente do
                      Terreiro do Bogum.
                    </figcaption>
                  </div>
                </section>

               <section className="flex flex-col items-center gap-8 md:flex-row md:items-stretch">
                  <div className="flex w-full items-center justify-center md:w-1/3">
                    <Image
                      src="/images/francisca.jpeg"
                      alt="Ilustração do continente africano com elementos culturais"
                      width={200}
                      height={200}
                      className="h-auto w-full max-w-md object-contain"
                    />
                  </div>
                   

                  <div className="flex-1">
                  <h3 className="mb-2 font-semibold">Nação Ketu e Efon</h3>

                  <p>
                    Ambas compõem o grande grupo Nagô (Iorubá). O Ketu é hoje
                    uma das nações mais difundidas e conhecidas. A linhagem
                    Efon, embora tecnicamente parte do tronco cultural Iorubá,
                    possui suas especificidades rituais e de fundamento.
                  </p>

                  <p>
                    Elas cultuam os Orixás, divindades que personificam as
                    forças da natureza e as qualidades humanas, com uma
                    mitologia muito rica e detalhada, amplamente estudada por
                    Verger.
                  </p>
                   <figcaption className="mt-3 text-center text-sm font-medium text-[#f7a12d]">
                      Francisca da Silva (Iyá Nassô), dirigente do
                       Terreiro da Casa Branca (Ilê Iyá Nassô Oká).
                    </figcaption>
                  </div>


                </section>
                                  <p>
                    Essas classificações, entretanto, não devem ser entendidas
                    como caixas completamente fechadas. A história do Candomblé
                    no Brasil é marcada por encontros, intercâmbios,
                    transformações e processos de continuidade cultural. A
                    própria existência de diferentes denominações e linhagens
                    demonstra que estamos diante de uma tradição dinâmica e
                    plural.
                  </p>
              </div>
            </section>
            <div className="h-4" />

             <section className="flex flex-col items-center gap-8 md:flex-row md:items-stretch">
              <div className="flex w-full items-center justify-center md:w-1/3">
                <Image
                  src="/images/africa.png"
                  alt="Ilustração do continente africano com elementos culturais"
                  width={800}
                  height={200}
                  className="h-auto w-full max-w-md object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="subtitle mb-5">África e Brasil</h3>

                <p>
                  A compreensão do Candomblé também passa pela relação entre
                  África e Brasil. Pierre Verger dedicou grande parte de sua
                  trajetória ao estudo dessas relações, realizando pesquisas e
                  viagens entre a África Ocidental e o Brasil. Sua obra Orixás:
                  Deuses Iorubás na África e no Novo Mundo, por exemplo,
                  apresenta aspectos do culto aos Orixás em diferentes contextos
                  africanos e nas comunidades formadas nas Américas. Seu
                  trabalho demonstra a importância de observar simultaneamente
                  as continuidades e as transformações existentes entre os
                  conhecimentos africanos e suas expressões no Brasil. O
                  Candomblé brasileiro não deve, portanto, ser compreendido
                  simplesmente como uma reprodução de uma religião africana. Ele
                  é resultado de processos históricos complexos, nos quais
                  diferentes conhecimentos africanos foram preservados,
                  recriados e transmitidos em território brasileiro.
                </p>
              </div>
            </section>

            <section>
              <h3 className="subtitle mb-5 text-center align-center items-center">
                Uma mesma palavra pode ter diferentes sentidos
              </h3>
              <p>
                A diversidade também aparece no vocabulário utilizado dentro das
                comunidades. Uma palavra, objeto, canto, elemento ritual ou
                determinada prática pode apresentar nomes, significados ou
                formas de utilização diferentes dependendo da tradição, da casa
                ou da linhagem. Por esse motivo, ao longo desta plataforma,
                evitaremos apresentar determinado costume como se ele fosse
                universal dentro do Candomblé. Quando houver diferenças
                importantes entre tradições, elas serão apresentadas sempre que
                possível, indicando o contexto ao qual determinada informação
                está relacionada. Essa é uma das razões pelas quais conhecer o
                contexto de um conhecimento é tão importante quanto conhecer o
                próprio conhecimento.
              </p>
            </section>
            <div className="h-4" />

            <section>
              <h3 className="subtitle text-center align-center items-center mb-5">
                Diversidade não significa falta de tradição{" "}
              </h3>
              <p>
                Reconhecer a diversidade do Candomblé não significa afirmar que
                cada pessoa ou cada casa possa simplesmente criar suas próprias
                regras. As comunidades possuem formas próprias de transmissão,
                hierarquias, fundamentos, ritos, conhecimentos e autoridades,
                que são aprendidos dentro de contextos específicos. Muitos
                conhecimentos são transmitidos pela oralidade, pela observação,
                pela convivência e pela participação na comunidade. Outros
                possuem caráter reservado e não devem ser reproduzidos ou
                divulgados fora dos contextos apropriados. Por isso, uma
                plataforma de caráter educativo como esta precisa reconhecer
                seus próprios limites. O objetivo aqui não é substituir a
                transmissão tradicional dos conhecimentos, nem transformar
                aquilo que é aprendido dentro de uma comunidade em um manual
                universal. O objetivo é oferecer caminhos de estudo,
                contextualização e aproximação cultural, permitindo que o
                visitante compreenda melhor a diversidade existente e encontre
                referências para continuar sua pesquisa
              </p>
            </section>
            <div className="h-4" />

           
            <div className="h-4" />

            <aside className="text-little ">
              Referências e leituras:
              <ul className="list-disc pl-5">
                <li>
                  Pierre Verger - Orixás: Deuses Iorubás na África e no Novo
                  Mundo, Notas sobre o Culto aos Orixás e Voduns.
                </li>
                <li>Yeda Pessoa de Castro - Língua e nação de candomblé.</li>
                <li>
                  Juana Elbein dos Santos - Os Nagô e a Morte: Pàde, Àsèsè e o
                  Culto Égun na Bahia.
                </li>
              </ul>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}
