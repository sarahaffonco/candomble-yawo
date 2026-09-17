import Header from "@/components/header/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen  ">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center  gap-5">
        <article className="mx-auto max-w-190">
          <div className= "h-4"/>
          <header className="mb-10 text-center">
            <h1 className="title-card text-2xl font-semibold leading-tight sm:text-3xl text-[#e97d36]">
              Acervo de ancestralidade e cultura
            </h1>
          </header>

          <div className=" space-y-4 text-justify text-sm leading-7">
            <p className=" text-content items-center max-w-190 whitespace-pre-line text-justify ">
              {`      A bênção, meus mais velhos. A bênção, meus mais novos. 
         
                Seja bem-vindo(a) a este espaço de conhecimento, memória e aprendizado sobre o Candomblé e a cultura afro-brasileira.

Este projeto nasce do desejo de estudar, registrar, organizar e compartilhar conhecimentos relacionados ao Candomblé, reconhecendo sua importância como manifestação cultural, expressão de espiritualidade, tradição e patrimônio construído e transmitido por diferentes gerações.

O Candomblé é marcado por uma profunda diversidade de histórias, nações, casas, linhagens, conhecimentos e formas de vivência. Por isso, este espaço não pretende estabelecer uma única forma de compreender ou vivenciar a tradição, nem determinar o que é certo ou errado dentro de diferentes comunidades. A proposta é apresentar conhecimentos e referências de maneira responsável, contextualizada e respeitosa, reconhecendo a pluralidade que constitui o Candomblé.

A plataforma foi pensada como um espaço de aprendizagem e difusão cultural, reunindo conteúdos que possibilitem ao público conhecer diferentes aspectos dessa tradição. Aqui serão encontrados materiais sobre Orixás, Itans, Odùs, Adurás, cânticos, ervas, elementos e objetos, vocabulário, vivências e outros saberes relacionados ao universo do Candomblé.

O projeto também busca contribuir para a preservação da memória cultural, por meio do registro e da organização de histórias, referências, conhecimentos e informações que fazem parte da trajetória e da diversidade das comunidades de Candomblé. Nesse sentido, a plataforma contará também com espaços dedicados ao Herbário, à Memória Cultural e ao Mapeamento, ampliando as possibilidades de pesquisa e acesso a esses conhecimentos.

Grande parte dos conteúdos será construída a partir de estudos, pesquisas, referências bibliográficas e diferentes fontes relacionadas à cultura afro-brasileira, valorizando pesquisadores, escritores, praticantes e detentores de conhecimentos que contribuíram para registrar e preservar aspectos dessa tradição.

Ao mesmo tempo, este projeto parte de uma trajetória pessoal de estudo e vivência. A experiência como Yawô motiva a busca contínua por conhecimento e o desejo de transformar parte desse aprendizado em um espaço organizado, acessível e responsável de compartilhamento cultural, sempre respeitando os conhecimentos que possuem contextos próprios de transmissão e aqueles que não devem ser expostos ou reproduzidos fora de seus espaços tradicionais.

Mais do que reunir informações, esta plataforma pretende estimular a curiosidade, ampliar repertórios culturais e aproximar diferentes públicos dos saberes, histórias e memórias que constituem o Candomblé.

O conhecimento aqui apresentado deve ser compreendido como parte de um processo contínuo de estudo, pesquisa e aprendizado. Cada conteúdo é também um convite à reflexão sobre a diversidade cultural e sobre a importância de preservar e valorizar os saberes afro-brasileiros.

Que este espaço possa contribuir para uma aproximação mais consciente, respeitosa e responsável com o Candomblé, promovendo conhecimento, valorização cultural e preservação da memória.`}
            </p>
          </div>
        </article>
      </main>
    </main>
  );
}
