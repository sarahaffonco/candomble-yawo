import Header from "@/components/header";
import AduraButton from "@/components/adurasButtons";
import { orixasColors } from "@/data/orixasColors";

type OrixaColorKey = keyof typeof orixasColors;

const aduras: Array<{
  id: number;
  name: string;
  slug: string;
  orixa: OrixaColorKey;
}> = [
  { id: 1, name: "Adura Exú", slug: "adura-esu", orixa: "esu" },
  { id: 2, name: "Adura Ogum", slug: "adura-ogum", orixa: "ogum" },
  { id: 3, name: "Adura Oxóssi", slug: "adura-oxossi", orixa: "oxossi" },
  { id: 4, name: "Adura Logun-Edé", slug: "adura-logun", orixa: "logun" },
  { id: 5, name: "Adura Ossaim", slug: "adura-ossaim", orixa: "ossaim" },
  { id: 6, name: "Adura Omulu", slug: "adura-omulu", orixa: "omulu" },
  { id: 7, name: "Adura Oxumarê", slug: "adura-oxumare", orixa: "oxumare" },
  { id: 8, name: "Adura Iroko", slug: "adura-iroko", orixa: "iroko" },
  { id: 9, name: "Adura Xangô 1", slug: "adura-xango1", orixa: "xango" },
  { id: 10, name: "Adura Xangô 2", slug: "adura-xango2", orixa: "xango" },
  { id: 11, name: "Adura Oyá", slug: "adura-oya", orixa: "oya" },
  { id: 12, name: "Adura Obá", slug: "adura-oba", orixa: "oba" },
  { id: 13, name: "Adura Oxum", slug: "adura-oxum", orixa: "oxum" },
  { id: 14, name: "Adura Ewá", slug: "adura-ewa", orixa: "ewa" },
  { id: 15, name: "Adura Nanã", slug: "adura-nana", orixa: "nana" },
  { id: 16, name: "Adura Iemanjá", slug: "adura-iemanja", orixa: "iemanja" },
  { id: 17, name: "Adura Oxalá", slug: "adura-oxala", orixa: "oxala" },
  { id: 18, name: "Adura Iyami 1", slug: "adura-yami1", orixa: "iyami" },
  { id: 19, name: "Adura Iyami 2", slug: "adura-yam2", orixa: "iyami" },
  { id: 20, name: "Adura Ori 1", slug: "adura-ori1", orixa: "ori" },
  { id: 21, name: "Adura Ori 2", slug: "adura-ori2", orixa: "ori" },
];

export default function AdurasCanticosPage() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center  gap-5">
        <br></br>
          <h1 className=" title-card mb-3 max-w-260 text-center text-sm font-semibold leading-tight">
            O Sopro do Axé: A Oralidade no Candomblé e a Força da Palavra
          </h1>

          <p className=" text-content mx-auto max-w-190 whitespace-pre-line text-justify ">
            {`Historicamente, o Candomblé consolidou-se em solo brasileiro como uma religião de profunda tradição oral. 
Nas comunidades de terreiro, a fala não é um mero veículo de comunicação comum; ela é o próprio veículo do Axé (a força vital). Para compreender essa teia de ensinamentos orais, é preciso diferenciar as cinco principais formas de expressão litúrgica:

1. Àdúrà (A Súplica Cantada)
Conceito: O àdúrà é a reza ou oração direcionada aos Orixás. Traduz-se como súplica ou oração.

Função: Diferente de uma simples fala, o àdúrà é quase sempre entoado de forma cadenciada e cantada. Seu objetivo é evocar a energia do sagrado para clamar por socorro, pedir proteção, agradecer pelas graças alcançadas, solicitar saúde ou exaltar os atributos da divindade.

2. Oríkì (A Poesia de Louvação)
Conceito: Traduzido essencialmente como "poesia", o oríkì é um texto poético em verso focado em exaltar os feitos, qualidades e atributos dos ancestrais divinizados.

Função: Enquanto o àdúrà é majoritariamente cantado, o oríkì é declamado ou recitado de forma poética. É a ferramenta essencial para o encantamento e ativação das forças sagradas nos assentamentos (ojubós). É também nos oríkìs que encontramos a base mítica para a realização de grande parte dos ritos litúrgicos.

3. Ọ̀fọ̀ (O Sopro do Encantamento)
Conceito: O ọ̀fọ̀ é a palavra de poder, a expressão verbal da magia e do encantamento. Pode ser uma frase longa ou uma única palavra sagrada.

Função: É utilizado para potencializar ações mágicas ou terapêuticas, como no encantamento das folhas litúrgicas (ritos de cura e banhos). O grande segredo do ọ̀fọ̀ reside no fato de que não basta pronunciá-lo: é preciso ter o axé, o dom e o alinhamento espiritual para ativá-lo. Dependendo da intenção, dividem-se em categorias como ọ̀fọ̀ iba (homenagem), ọ̀fọ̀ awure (boa sorte) e ọ̀fọ̀ isoye (memória).

4. Ìtàn (A Narrativa Mítica e Educativa)
Conceito: O ìtàn representa a história, o mito e a biografia de divindades e forças da natureza.

Função: No Candomblé, uma religião consuetudinária (que se baseia no costume e na prática coletiva, sem um livro sagrado fixo), o ìtàn funciona como a nossa biblioteca histórica e moral. Através de fábulas e metáforas ricas, os ìtáns ensinam regras de convivência, explicam o porquê de determinados rituais (como o mistério das folhas de Ossaim) e constroem os padrões de conduta ética e social da comunidade.

5. Orin (O Canto Coletivo)
Conceito: A palavra orin significa, simplesmente, cântico ou música.

Função: No contexto ritualístico, os orins são as cantigas sagradas que compõem o Xirê (a roda de louvação festiva aos Orixás). Cada divindade possui suas próprias cantigas exclusivas que servem para evocá-las e celebrar suas presenças. O canto coletivo une a comunidade, gera transe e harmoniza o terreiro através do som dos atabaques.`}
          </p>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {aduras.map((adura) => (
            <div key={adura.id} className="w-full">
              <AduraButton
                slug={adura.slug}
                nome={adura.name}
                cor={orixasColors[adura.orixa]}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
