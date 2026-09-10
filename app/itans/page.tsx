import Header from "@/components/header/Header";
import { getCardImagePath } from "@/lib/cardImages";
import ContentCard from "@/components/contentCard";
import { itans } from "@/data/itans";


export default function ItansPage() {
  return (
    <div>
      <Header />
            <main className="flex min-h-screen flex-col items-center justify-center  gap-5">
        <br></br>
          <h1 className=" title-card mb-3 max-w-260 text-center text-sm font-semibold leading-tight">
            A Memória do Axé: Os Itans e os Caminhos dos Orixás
          </h1>

          <p className=" text-content mx-auto max-w-190 whitespace-pre-line text-justify ">
            {`Os Itans são as narrativas sagradas da tradição iorubá que preservam a memória, os ensinamentos e a sabedoria dos Orixás, dos ancestrais e da própria criação do mundo. Transmitidos durante séculos pela tradição oral e, posteriormente, registrados por estudiosos e sacerdotes, esses relatos explicam a origem dos Orixás, suas qualidades, seus desafios, suas relações com a natureza e com a humanidade, revelando os princípios que sustentam a religião.

No Candomblé, os Itans não são vistos apenas como histórias ou lendas. Eles constituem uma importante fonte de conhecimento religioso, filosófico e moral, orientando a compreensão dos rituais, dos símbolos, das folhas, das oferendas, dos preceitos e da conduta dos iniciados. Por meio dessas narrativas, compreende-se o significado de diversos fundamentos da religião e a forma como cada Orixá manifesta seu axé e sua atuação no mundo.

Cada Itan carrega múltiplos ensinamentos e pode possuir diferentes versões, preservadas pelas diversas tradições e casas de axé. Essa diversidade não representa contradição, mas a riqueza de uma herança cultural transmitida de geração em geração. Conhecer os Itans é aproximar-se da história, da espiritualidade e da visão de mundo que moldam o Candomblé, valorizando uma tradição ancestral baseada no respeito aos Orixás, aos mais velhos, à natureza e à preservação do axé. Essa compreensão é essencial para quem deseja conhecer a religião de forma séria, respeitosa e fundamentada.`}
          </p>

          <div className="grid max-w-240 mx-auto grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                  {itans.map((itan) => (
                    <ContentCard
                      key={itan.slug}
                      nome={itan.nome}
                      href={`/itans/${itan.slug}`}
                      cardImage={getCardImagePath(itan.slug)}
                    />
                  ))}
                </div>

        
      </main>
    </div>
    
  );
}

