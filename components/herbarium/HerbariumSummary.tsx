"use client";

type Herb = {
  nome: string;
};

type HerbariumSummaryProps = {
  ervas: Herb[];
  paginaAtual: number;
  irParaPagina: (numeroPagina: number) => void;
  paginaDoSumario: number;
  totalPaginasDoSumario: number;
  desabilitado?: boolean;
};

export default function HerbariumSummary({
  ervas,
  paginaAtual,
  irParaPagina,
  paginaDoSumario,
  totalPaginasDoSumario,
  desabilitado = false,
}: HerbariumSummaryProps) {
  const inicio = paginaDoSumario * 40;
  const ervasDaAbertura = ervas.slice(inicio, inicio + 40);
  const colunas = [ervasDaAbertura.slice(0, 20), ervasDaAbertura.slice(20, 40)];

  return (
    <>
      {colunas.map((coluna, colunaIndex) => (
        <nav
          key={`sumario-${paginaDoSumario}-${colunaIndex}`}
          className={`herbarium-page herbarium-summary herbarium-summary-${colunaIndex === 0 ? "left" : "right"} flex min-h-0 w-full flex-1 flex-col text-center md:w-1/2`}
          aria-label={`Sumário, página ${paginaDoSumario + 1}, ${colunaIndex === 0 ? "esquerda" : "direita"}`}
        >
          <h1 className="text-center font-serif text-2xl uppercase tracking-[0.12em] text-[#493426] sm:text-3xl">
            Sumário
          </h1>

          <div className="herbarium-summary-line" aria-hidden="true" />

          <ol className="mt-5 flex flex-col gap-2">
            {coluna.map((erva, colunaItemIndex) => {
              const indiceErva = inicio + colunaIndex * 20 + colunaItemIndex;
              const numeroPagina = totalPaginasDoSumario + indiceErva + 1;

              return (
                <li
                  key={`${erva.nome}-${indiceErva}`}
                  className="flex min-w-0 items-baseline gap-3 border-b border-[#c8a879]/60 py-1.5"
                >
                  <button
                    type="button"
                    onClick={() => irParaPagina(numeroPagina)}
                    disabled={desabilitado}
                    className="min-w-0 flex-1 truncate text-left text-sm text-[#493426] underline-offset-4 transition-colors hover:text-[#9b5d1b] hover:underline disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
                  >
                    {erva.nome || `Página ${numeroPagina}`}
                  </button>

                  <button
                    type="button"
                    onClick={() => irParaPagina(numeroPagina)}
                    disabled={desabilitado}
                    className="shrink-0 font-serif text-sm text-[#73533b] underline-offset-4 transition-colors hover:text-[#9b5d1b] hover:underline disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label={`Ir para a página ${numeroPagina}`}
                  >
                    {String(numeroPagina).padStart(2, "0")}
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      ))}
    </>
  );
}
