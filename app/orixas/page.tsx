<<<<<<< Updated upstream
export default function OrixasPage() {
  return (
    <div>
      <h1>Orixás</h1>
      <p>Lista de Orixás</p>
    </div>
  );
}
=======
import OrixaButton from "@/components/orixasButtons";
import Header from "@/components/header";
import { orixasColors } from "@/data/orixasColors";
import { orixas } from "@/data/orixas";

type OrixaItem = (typeof orixas)[number];

export default function OrixasPage() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center  gap-5">
        <br></br>
          <h1 className=" title-card mb-3 max-w-260 text-center text-sm font-semibold leading-tight">Os Orixás </h1>
      <p className="text-content mx-auto max-w-190 whitespace-pre-line text-justify">
        Dentro da cosmologia iorubá e do Candomblé, os Orixás não são apenas
        deuses distantes no céu, mas sim a personificação de forças vivas da
        natureza, arquétipos comportamentais e ancestrais divinizados. A palavra
        Òrìṣà deriva da tradição dos povos nagô/iorubá da África Ocidental
        (regiões hoje pertencentes à Nigéria, Benin e Togo). Na visão
        tradicional, os Orixás foram seres humanos extraordinários que viveram
        na Terra (Aiyé) e estabeleceram um controle poderoso sobre certas forças
        naturais (como o raio, o vento, as águas doces e os metais) ou dominaram
        saberes específicos (como a caça, a medicina e a tecelagem). Ao emanarem
        uma quantidade imensa de Àṣẹ (Axé — a energia e força vital que move o
        universo), eles não passaram pela morte comum. Em momentos de transição
        marcados por intensa paixão, bravura ou metamorfose, integraram-se à
        própria natureza, tornando-se ancestrais divinizados. Através do transe
        de possessão nos rituais do Candomblé, o Orixá retorna temporariamente
        ao mundo terreno encarnando em seus descendentes e iniciados (Elégùn ou
        Iawó), para abençoar, orientar e harmonizar a comunidade
      </p>
      <h2 className=" subtitle ">As Categorias do Divino:</h2>
      <p className="text-content mx-auto max-w-190 whitespace-pre-line text-justif">
        Na teologia iorubá e nas tradições preservadas no Candomblé, nem toda
        entidade ou força primordial é classificada da mesma forma. Há
        distincões fundamentais entre esses conceitos:{" "}
      </p>
      <h3 className="menu-link">Irunmolé (Irúnmọ̀lẹ̀)</h3>
      <p className="text-content mx-auto max-w-190 whitespace-pre-line text-justify">
        Definição: Significa literalmente "Os seres espirituais que baixaram à
        Terra" (ou os espíritos da criação). Conceito: São as divindades
        primordiais criadas diretamente por Olódùmarè (o Deus Supremo) antes
        mesmo da criação da humanidade. Eles presenciaram a estruturação do
        universo e foram encarregados de modelar o mundo e prover as condições
        para a vida. Exemplos: Òrìṣàálá (Obatala) e Odudua.
      </p>
      <h3 className="menu-link">Imolé (Ìmọ̀lẹ̀)</h3>
      <p className="text-content mx-auto max-w-190 whitespace-pre-line text-justify">
        Definição: Deriva de Mọ̀ (saber/conhecer) e Ilẹ̀ (terra) ou Iimọ̀-ilẹ̀
        (luz/conhecimento da terra). Conceito: É o termo genérico e amplo
        utilizado para designar todas as divindades e espíritos de luz que
        habitam o Òrun (o plano espiritual) e possuem poder sobre a Terra. Uso:
        Tanto um Irunmolé primordial quanto um ancestral divinizado (Ebóra)
        entram no conceito geral de Ìmọ̀lẹ̀. Na literatura tradicional, fala-se
        nos "400 Imolé da esquerda e 200 Imolé da direita" para se referir à
        totalidade do panteão espiritual.{" "}
      </p>
      <h3 className="menu-link">Jijabora ou Ebóras (Ẹbọra)</h3>
      <p className="text-content mx-auto max-w-190 whitespace-pre-line text-justify">
        Definição: Espíritos encarnados que alcançaram a divinização através de
        seus feitos lendários e de seu Àṣẹ extraordinário. Conceito: Diferente
        dos Irunmolé (que nasceram como espíritos primordiais), os Ebóras foram
        homens e mulheres reais que caminharam sobre a terra, governaram reinos,
        guerrearam e dominaram elementos da natureza. Quando deixaram o mundo
        físico, não morreram da forma comum, mas transformaram-se em forças
        vivas (Orixás). Exemplos: Şàngó (Xangô, que foi o terceiro rei lendário
        de Oyó), Ògún (Ogum, rei de Irê) e Oya (Iansã)
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

          {orixas.map((orixa) => (

            <OrixaButton
              key={orixa.slug}
              nome={orixa.nome}
              slug={orixa.slug}
              cor={orixasColors[orixa.slug as keyof typeof orixasColors]}
            />

          ))}

      </div>

      </main>
      </div>
  )}
>>>>>>> Stashed changes
