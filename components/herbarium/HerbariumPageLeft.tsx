import Image from "next/image";

type Props = {
  nome: string;
  nomeCientifico: string;
  imagem: string;

  zoomAtivo: boolean;
  posicao: {
    x: number;
    y: number;
  };
  arrastando: boolean;

  iniciarArraste: (
    event: React.PointerEvent<HTMLDivElement>
  ) => void;

  moverImagem: (
    event: React.PointerEvent<HTMLDivElement>
  ) => void;

  finalizarArraste: (
    event: React.PointerEvent<HTMLDivElement>
  ) => void;

  alternarZoom: () => void;
};

export default function HerbariumPageLeft({
  nome,
  nomeCientifico,
  imagem,
  zoomAtivo,
  posicao,
  arrastando,
  iniciarArraste,
  moverImagem,
  finalizarArraste,
  alternarZoom,
}: Props) {
  return (
    <div className="herbarium-page herbarium-page-left flex min-h-0 w-full flex-1 flex-col items-center justify-center p-4 sm:p-6 md:w-1/2 md:p-8">
      <div
        className="herbarium-ornament"
        aria-hidden="true"
      />

      <div
        className={`herbarium-image-container ${
          zoomAtivo ? "zoom-ativo" : ""
        } ${arrastando ? "arrastando" : ""}`}
        onPointerDown={iniciarArraste}
        onPointerMove={moverImagem}
        onPointerUp={finalizarArraste}
        onPointerCancel={finalizarArraste}
      >
        <Image
          src={imagem}
          alt={nome}
          fill
          sizes="(max-width: 768px) 85vw, 40vw"
          draggable={false}
          className="herbarium-plant-image"
          style={{
            transform: `
              translate(${posicao.x}px, ${posicao.y}px)
              scale(${zoomAtivo ? 1.8 : 1})
            `,
          }}
        />

        <button
          type="button"
          className="herbarium-zoom-button"
          onPointerDown={(event) => {
            event.stopPropagation();
          }}
          onClick={(event) => {
            event.stopPropagation();
            alternarZoom();
          }}
          aria-label={
            zoomAtivo
              ? "Diminuir imagem"
              : "Ampliar imagem"
          }
        >
          {zoomAtivo ? "−" : "⌕"}
        </button>
      </div>

      <p className="mt-3 text-center font-serif text-base italic text-[#73533b]">
        {nomeCientifico}
      </p>
    </div>
  );
}