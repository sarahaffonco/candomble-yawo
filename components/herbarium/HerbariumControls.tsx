import { useEffect, useState } from "react";

type HerbariumControlsProps = {
  paginaAtual: number;
  totalPaginas: number;
  paginaAnterior: () => void;
  proximaPagina: () => void;
  irParaPagina: (numeroPagina: number) => void;
  desabilitado?: boolean;
};

export default function HerbariumControls({
  paginaAtual,
  totalPaginas,
  paginaAnterior,
  proximaPagina,
  irParaPagina,
  desabilitado = false,
}: HerbariumControlsProps) {
  const [paginaDigitada, setPaginaDigitada] = useState(
    String(paginaAtual + 1),
  );

  useEffect(() => {
    setPaginaDigitada(String(paginaAtual + 1));
  }, [paginaAtual]);

  function confirmarPagina() {
    const numeroPagina = Number(paginaDigitada);

    if (Number.isInteger(numeroPagina) && numeroPagina >= 1 && numeroPagina <= totalPaginas) {
      irParaPagina(numeroPagina);
      return;
    }

    setPaginaDigitada(String(paginaAtual + 1));
  }

  return (
    <div className="herbarium-controls mt-2 flex shrink-0 items-center gap-6">

      <button
        type="button"
        onClick={paginaAnterior}
        disabled={desabilitado}
        className="herbarium-control disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Página anterior"
      >
        ←
      </button>

      <div className="herbarium-counter flex items-center justify-center font-serif text-sm">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={paginaDigitada}
          onChange={(event) => {
            if (/^\d*$/.test(event.target.value)) {
              setPaginaDigitada(event.target.value);
            }
          }}
          onBlur={confirmarPagina}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              confirmarPagina();
              event.currentTarget.blur();
            }
          }}
          disabled={desabilitado}
          aria-label="Número da página"
          className="w-8 bg-transparent text-center font-serif text-sm text-[#f1cf91] outline-none"
        />
        {" / "}
        {String(totalPaginas).padStart(2, "0")}
      </div>

      <button
        type="button"
        onClick={proximaPagina}
        disabled={desabilitado}
        className="herbarium-control disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Próxima página"
      >
        →
      </button>

    </div>
  );}