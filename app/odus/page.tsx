import Link from "next/link";
import Header from "@/components/header";
import { odus } from "@/data/odus";


export default function Odus() {
  return (
    <div>
      <Header />
      <div className="h-4"/>
      <main className="flex min-h-screen flex-col items-center justify-center  gap-5">
          <div className="h-4"/>
          <h1 className="title-card mb-3 max-w-260 text-center text-sm font-semibold leading-tight">
            
            Odù: Os Caminhos do Destino e a Sabedoria de Ifá
          </h1>
          <p className="text-content mx-auto max-w-3xl text-justify leading-8 text-[#4b2310]">
            No universo religioso iorubá, poucos conceitos são tão profundos
            quanto o de Odù. Muito mais do que simples "signos" ou "caminhos",
            os Odù representam os princípios pelos quais Olódùmarè organizou a
            criação, estabelecendo as leis que regem a existência, o destino dos
            seres humanos e o equilíbrio entre o Òrun (o mundo espiritual) e o
            Àiyé (o mundo material). Segundo a tradição preservada pelo culto de
            Ifá e incorporada ao Candomblé Ketu, cada Odù reúne um vasto
            conjunto de ensinamentos transmitidos oralmente ao longo de séculos.
            Em seus versos, chamados Èsè Ifá, encontram-se histórias (itans),
            orientações morais, ensinamentos filosóficos, rezas, ebós,
            prescrições rituais e exemplos que explicam como homens, mulheres,
            Orixás e ancestrais enfrentaram os desafios da existência. Por essa
            razão, um Odù não deve ser entendido como uma simples previsão do
            futuro. Ele representa uma manifestação da vontade divina sobre
            determinado momento da vida, revelando tendências, desafios,
            oportunidades e os caminhos mais adequados para que a pessoa
            mantenha seu equilíbrio espiritual. No Candomblé, quando um
            sacerdote consulta o Jogo de Búzios, não é o búzio que responde às
            perguntas. Os búzios apenas revelam qual Odù está se manifestando
            naquele instante. É através do conhecimento desse Odù, de seus itans
            e de seus ensinamentos que o sacerdote interpreta a mensagem dos
            Orixás e orienta aquele que busca aconselhamento. Cada Odù possui
            sua própria personalidade, seus símbolos, suas energias, seus
            interditos, seus Orixás regentes e seus ensinamentos específicos.
            Alguns falam sobre prosperidade, outros sobre transformação,
            justiça, ancestralidade, paciência, cura, renovação ou desafios que
            precisam ser superados. Nenhum deles é absolutamente bom ou
            absolutamente ruim. Assim como a própria vida, todos apresentam
            possibilidades favoráveis e desfavoráveis, dependendo da maneira
            como a pessoa conduz suas escolhas e de sua relação com o sagrado.
            Os Odù também ocupam um papel central na compreensão do destino
            humano. Antes de nascer, segundo a tradição iorubá, cada espírito
            comparece diante de Olódùmarè para escolher seu Orí, seu destino. Ao
            longo da vida, os Odù tornam-se instrumentos que permitem
            compreender esse caminho, indicando quais atitudes fortalecem o axé
            e quais podem afastar a pessoa de sua missão espiritual. Embora o
            sistema completo de Ifá seja composto por 256 Odù (resultado das
            combinações dos dezesseis Odù principais), no Candomblé Ketu a
            tradição concentra-se principalmente nos 16 Odù fundamentais, que
            constituem a base do Jogo de Búzios e da interpretação oracular.
          </p>

        <div className="w-full max-w-4xl p-6 shadow-[0_10px_35px_rgba(76,35,12,0.16)] sm:p-8">
          <h2 className="title-card mb-6 text-center text-[#8b3a0f]">
            Os 16 Odus fundamentais
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {odus.map((odu) => (
              <Link
                key={odu.slug}
                href={`/odus/${odu.slug}`}
                className="rounded-2xl border border-[#e6b886] bg-[#fdf0df] px-4 py-3 text-center text-sm font-semibold text-[#4b2310] transition hover:-translate-y-0.5 hover:bg-[#fbe2c0]"
              >
                {odu.nome}{" "}

              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
