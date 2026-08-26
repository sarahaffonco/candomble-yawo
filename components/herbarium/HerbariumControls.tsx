type HerbariumControlsProps = {
  paginaAtual: number;
  totalPaginas: number;
  paginaAnterior: () => void;
  proximaPagina: () => void;
  desabilitado?: boolean;
};

export default function HerbariumControls({
  paginaAtual,
  totalPaginas,
  paginaAnterior,
  proximaPagina,
  desabilitado = false,
}: HerbariumControlsProps) {
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

      <span className="herbarium-counter font-serif text-sm">
        {String(paginaAtual + 1).padStart(2, "0")}
        {" / "}
        {String(totalPaginas).padStart(2, "0")}
      </span>

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