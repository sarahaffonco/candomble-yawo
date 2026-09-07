import { useState } from "react";

export function useHerbariumNavigation(totalPaginas: number) {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [virando, setVirando] = useState(false);
  const [direcao, setDirecao] = useState<"next" | "prev">("next");

  function virarPagina(direcaoNova: "next" | "prev") {
    if (virando || totalPaginas === 0) return;

    setDirecao(direcaoNova);
    setVirando(true);

    setTimeout(() => {
      setPaginaAtual((pagina) => {
        if (direcaoNova === "next") {
          return pagina === totalPaginas - 1 ? 0 : pagina + 1;
        }

        return pagina === 0 ? totalPaginas - 1 : pagina - 1;
      });
    }, 350);

    setTimeout(() => {
      setVirando(false);
    }, 700);
  }

  function paginaAnterior() {
    virarPagina("prev");
  }

  function proximaPagina() {
    virarPagina("next");
  }

  function irParaPagina(numeroPagina: number) {
    if (
      virando ||
      !Number.isInteger(numeroPagina) ||
      numeroPagina < 1 ||
      numeroPagina > totalPaginas ||
      numeroPagina === paginaAtual + 1
    ) {
      return;
    }

    setDirecao(numeroPagina > paginaAtual + 1 ? "next" : "prev");
    setVirando(true);

    setTimeout(() => {
      setPaginaAtual(numeroPagina - 1);
    }, 350);

    setTimeout(() => {
      setVirando(false);
    }, 700);
  }

  return {
    paginaAtual,
    virando,
    direcao,
    paginaAnterior,
    proximaPagina,
    irParaPagina,
  };
}