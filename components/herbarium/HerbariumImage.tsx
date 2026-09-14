import Image from "next/image";

type HerbariumImageProps = {
  src: string;
  alt: string;

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

export default function HerbariumImage({
  src,
  alt,
  zoomAtivo,
  posicao,
  arrastando,
  iniciarArraste,
  moverImagem,
  finalizarArraste,
  alternarZoom,
}: HerbariumImageProps) {
  return (
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
        src={src}
        alt={alt}
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
  );
}