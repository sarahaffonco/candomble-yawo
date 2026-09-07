"use client";

import { useEffect } from "react";

import { useHerbariumNavigation } from "@/hooks/useHerbariumNavigation";
import { useImageZoom } from "@/hooks/useImageZoom";

import HerbariumPageLeft from "./herbarium/HerbariumPageLeft";
import HerbariumPageRight from "./herbarium/HerbariumPageRight";
import HerbariumControls from "./herbarium/HerbariumControls";
import HerbariumSummary from "./herbarium/HerbariumSummary";

type Erva = {
  nome: string;
  nomeCientifico: string;
  nomeTradicional?: string;
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
  const totalPaginasDoSumario = Math.ceil(ervas.length / 40);

  const {
    paginaAtual,
    virando,
    direcao,
    paginaAnterior,
    proximaPagina,
    irParaPagina,
  } = useHerbariumNavigation(ervas.length + totalPaginasDoSumario);

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

  const erva = paginaAtual < totalPaginasDoSumario
    ? null
    : ervas[paginaAtual - totalPaginasDoSumario];

  useEffect(() => {
    resetarZoom();
  }, [paginaAtual]);

  return (
    <section className="herbarium-shell flex h-full w-full flex-col items-center px-3 py-3 sm:px-6 lg:px-10">
      <div className="herbarium-book relative flex min-h-[calc(100vh-225px)] w-full max-w-300 flex-col overflow-hidden rounded-[10px] shadow-2xl md:flex-row">
        {virando && (
          <div
            className={`herbarium-turning-page ${
              direcao === "next"
                ? "herbarium-turning-page-next"
                : "herbarium-turning-page-prev"
            }`}
          />
        )}

        {paginaAtual < totalPaginasDoSumario ? (
          <HerbariumSummary
            ervas={ervas}
            paginaAtual={paginaAtual}
            irParaPagina={irParaPagina}
            paginaDoSumario={paginaAtual}
            totalPaginasDoSumario={totalPaginasDoSumario}
            desabilitado={virando}
          />
        ) : erva ? (
          <>
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
              nomeTradicional={erva.nomeTradicional}
              descricao={erva.descricao}
              caracteristicas={erva.caracteristicas}
              orixas={erva.orixas}
              usoTradicional={erva.usoTradicional}
              observacoes={erva.observacoes}
              pagina={paginaAtual + 1}
            />
          </>
        ) : null}
      </div>

      <HerbariumControls
        paginaAtual={paginaAtual}
        totalPaginas={ervas.length}
        paginaAnterior={paginaAnterior}
        proximaPagina={proximaPagina}
        irParaPagina={irParaPagina}
        desabilitado={virando}
      />
    </section>
  );
}