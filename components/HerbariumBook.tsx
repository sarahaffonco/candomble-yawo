"use client";

import { useEffect } from "react";

import { useHerbariumNavigation } from "@/hooks/useHerbariumNavigation";
import { useImageZoom } from "@/hooks/useImageZoom";

import HerbariumPageLeft from "./herbarium/HerbariumPageLeft";
import HerbariumPageRight from "./herbarium/HerbariumPageRight";
import HerbariumControls from "./herbarium/HerbariumControls";

type Erva = {
  nome: string;
  nomeCientifico: string;
  imagem: string;
  descricao: string;
  caracteristicas: string;
  usoTradicional: string;
  orixas: string;
  observacoes: string;
};

type HerbariumBookProps = {
  ervas: Erva[];
};

export default function HerbariumBook({
  ervas,
}: HerbariumBookProps) {
  const {
    paginaAtual,
    virando,
    direcao,
    paginaAnterior,
    proximaPagina,
  } = useHerbariumNavigation(ervas.length);

  const {
    zoomAtivo,
    posicao,
    arrastando,
    alternarZoom,
    iniciarArraste,
    moverImagem,
    finalizarArraste,
    resetarZoom,
  } = useImageZoom();

  const erva = ervas[paginaAtual];

  useEffect(() => {
    resetarZoom();
  }, [paginaAtual]);

  if (!erva) return null;

  return (
    <section className="herbarium-shell flex h-full w-full flex-col items-center px-3 py-3 sm:px-6 lg:px-10">

      <div className="herbarium-book relative flex min-h-0 w-full max-w-300 flex-1 flex-col overflow-hidden rounded-[10px] shadow-2xl md:flex-row">

        {virando && (
          <div
            className={`herbarium-turning-page ${
              direcao === "next"
                ? "herbarium-turning-page-next"
                : "herbarium-turning-page-prev"
            }`}
          />
        )}

        <HerbariumPageLeft
          nome={erva.nome}
          nomeCientifico={erva.nomeCientifico}
          imagem={erva.imagem}
          zoomAtivo={zoomAtivo}
          posicao={posicao}
          arrastando={arrastando}
          iniciarArraste={iniciarArraste}
          moverImagem={moverImagem}
          finalizarArraste={finalizarArraste}
          alternarZoom={alternarZoom}
        />

        <HerbariumPageRight
          nome={erva.nome}
          descricao={erva.descricao}
          caracteristicas={erva.caracteristicas}
          orixas={erva.orixas}
          usoTradicional={erva.usoTradicional}
          observacoes={erva.observacoes}
          pagina={paginaAtual + 1}
        />

      </div>

      <HerbariumControls
        paginaAtual={paginaAtual}
        totalPaginas={ervas.length}
        paginaAnterior={paginaAnterior}
        proximaPagina={proximaPagina}
        desabilitado={virando}
      />

    </section>
  );
}