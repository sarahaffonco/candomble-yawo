import HerbariumSeparator from "./HerbariumSeparator";

type Props = {
  nome: string;
  descricao: string;
  caracteristicas: string;
  orixas: string;
  usoTradicional: string;
  observacoes: string;
  pagina: number;
};

export default function HerbariumPageRight({
  nome,
  descricao,
  caracteristicas,
  orixas,
  usoTradicional,
  observacoes,
  pagina,
}: Props) {
  return (
    <div className="herbarium-page herbarium-page-right flex min-h-0 w-full flex-1 flex-col p-4 text-center sm:p-6 md:w-1/2 md:p-8">
      <div
        className="herbarium-ornament"
        aria-hidden="true"
      />

      <div className="herbarium-content flex-1 min-h-0 w-full overflow-y-auto">
        <div
          className="herbarium-title-ornament"
          aria-hidden="true"
        >
          <span>❧</span>
        </div>

        <div className="h-8" />

        <h1 className="text-center font-serif text-2xl font-semibold uppercase tracking-[0.14em] text-[#493426] sm:text-3xl">
          {nome}
        </h1>

        <HerbariumSeparator />

        <p className="text-[13px] leading-6 text-[#493426] sm:text-[14px]">
          {descricao}
        </p>

        <HerbariumSeparator />

        <h2 className="herbarium-heading text-center">
          Características
        </h2>

        <p className="text-[13px] leading-6 text-[#493426] sm:text-[14px]">
          {caracteristicas}
        </p>

        <HerbariumSeparator />

        <h2 className="herbarium-heading text-center">
          Relação com os Orixás
        </h2>

        <p className="text-[13px] leading-6 text-[#493426] sm:text-[14px]">
          {orixas}
        </p>

        <HerbariumSeparator />

        <h2 className="herbarium-heading text-center">
          Uso tradicional
        </h2>

        <p className="text-[13px] leading-6 text-[#493426] sm:text-[14px]">
          {usoTradicional}
        </p>

        <HerbariumSeparator />

        <h2 className="herbarium-heading text-center">
          Observações
        </h2>

        <p className="text-[13px] leading-6 text-[#493426] sm:text-[14px]">
          {observacoes}
        </p>
      </div>

      <p className="mt-2 shrink-0 text-center font-serif text-sm text-[#73533b]">
        {String(pagina).padStart(2, "0")}
      </p>
    </div>
  );
}