import Header from "@/components/header/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen  ">
      <Header />
      <section className="mx-auto mt-24 grid w-full max-w-295 gap-10 px-4 pb-12 pt-30 md:grid-cols-[minmax(260px,420px)_minmax(0,1fr)] md:px-8 md:pt-24 lg:gap-14">
        <div className="flex items-center md:justify-end">
          <div className="relative w-full max-w-90 overflow-hidden rounded-[28px] shadow-2xl">
            <Image
              src="/images/yawo.jpg"
              alt="Yawo"
              width={720}
              height={1080}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex max-w-175 flex-col gap-10 text-[#2d1b12] md:justify-self-start">
          <div className="h-6" />
          <div className="title-card text-center text-[#e97d36] ">
            <p>Acervo de ancestralidade e cultura</p>
          </div>

          <div className="text-content space-y-4 text-justify text-sm leading-7">
            <p className=" text-content mx-auto max-w-190 whitespace-pre-line text-justify ">
         { `     Asé e boas vindas, 
         Primeiramente a bênção meus mais velhos, a bênção meus mais novos. 
         
                Seja muito bem-vindo(a) a este espaço dedicado ao estudo, à reflexão e ao compartilhamento de experiências sobre o Candomblé. Antes de tudo, é importante dizer que este blog não tem a pretensão de estabelecer verdades absolutas, definir regras ou determinar o que é certo ou errado dentro de qualquer casa, tradição ou linhagem.
              O Candomblé é forma de expressão da espiritualidade e cultura rica em diversidade, construída por diferentes histórias, fundamentos e formas de vivência, todas merecedoras de respeito. Este projeto nasce do desejo de aprofundar meus estudos e registrar minha caminhada como Yawô e levar conhecimento e cultura de sua forma mais ampla.
     

            <p className=" text-content mx-auto max-w-190 whitespace-pre-line text-justify ">
         { `      A bênção, meus mais velhos. A bênção, meus mais novos. 
         
                Seja muito bem-vindo(a) a este espaço dedicado ao estudo, à reflexão e ao compartilhamento de experiências sobre o Candomblé. Antes de tudo, é importante dizer que este blog não tem a pretensão de estabelecer verdades absolutas, definir regras ou determinar o que é certo ou errado dentro de qualquer casa, tradição ou linhagem.
              O Candomblé é uma religião rica em diversidade, construída por diferentes histórias, fundamentos e formas de vivência, todas merecedoras de respeito. Este projeto nasce do desejo de aprofundar meus estudos e registrar minha caminhada como Yawô, compartilhando aprendizados adquiridos.
     

              Aqui, o leitor encontrará reflexões pessoais, anotações de estudo, conteúdos sobre os Orixás, Itans, Adurás, cânticos, ervas e outros temas que fazem parte desse universo tão vasto e fascinante. Grande parte do conteúdo também será inspirada por autores e pesquisadores que contribuíram significativamente para a preservação e divulgação da cultura afro-brasileira, como Pierre Verger, Thonny Hawany e tantas outras referências importantes para a compreensão do Candomblé.

              Este blog é, acima de tudo, um espaço de aprendizado contínuo. Assim como muitos que chegam até aqui, também sigo aprendendo, observando e buscando compreender cada vez mais os ensinamentos que me são transmitidos. Se estas páginas puderem esclarecer uma dúvida, despertar uma reflexão ou servir de apoio para alguém que está iniciando sua jornada, então este espaço já terá cumprido um de seus propósitos.

              Que os Orixás abençoem sua caminhada com respeito, responsabilidade e consciência. Seja bem-vindo(a). Que o Àṣẹ acompanhe seus passos.`}
            </p>
          </div>

          <div className="mt-8 flex justify-end gap-4 text-sm font-semibold uppercase text-[#5b1f0e]">
          </div>
        </div>
      </section>
    </main>
  );
}
