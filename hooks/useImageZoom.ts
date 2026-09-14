import { useRef, useState } from "react";

export function useImageZoom() {
  const [zoomAtivo, setZoomAtivo] = useState(false);
  const [posicao, setPosicao] = useState({
    x: 0,
    y: 0,
  });
  const [arrastando, setArrastando] = useState(false);

  const inicioArraste = useRef({
    x: 0,
    y: 0,
  });

  const posicaoInicial = useRef({
    x: 0,
    y: 0,
  });

  function alternarZoom() {
    setZoomAtivo((zoom) => {
      const novoZoom = !zoom;

      if (!novoZoom) {
        setPosicao({
          x: 0,
          y: 0,
        });
      }

      return novoZoom;
    });
  }

  function iniciarArraste(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    if (!zoomAtivo) return;

    setArrastando(true);

    inicioArraste.current = {
      x: event.clientX,
      y: event.clientY,
    };

    posicaoInicial.current = {
      x: posicao.x,
      y: posicao.y,
    };

    event.currentTarget.setPointerCapture(
      event.pointerId
    );
  }

  function moverImagem(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    if (!arrastando || !zoomAtivo) return;

    const deltaX =
      event.clientX - inicioArraste.current.x;

    const deltaY =
      event.clientY - inicioArraste.current.y;

    const limiteX = 170;
    const limiteY = 150;

    const novoX = Math.max(
      -limiteX,
      Math.min(
        limiteX,
        posicaoInicial.current.x + deltaX
      )
    );

    const novoY = Math.max(
      -limiteY,
      Math.min(
        limiteY,
        posicaoInicial.current.y + deltaY
      )
    );

    setPosicao({
      x: novoX,
      y: novoY,
    });
  }

  function finalizarArraste(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    setArrastando(false);

    try {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    } catch {}
  }

  function resetarZoom() {
    setZoomAtivo(false);
    setPosicao({
      x: 0,
      y: 0,
    });
    setArrastando(false);
  }

  return {
    zoomAtivo,
    posicao,
    arrastando,
    alternarZoom,
    iniciarArraste,
    moverImagem,
    finalizarArraste,
    resetarZoom,
  };
}