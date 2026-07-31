import Image from "next/image";
import Link from "next/link";

interface Props {
  nome: string;
  href: string;
  cardImage?: string;
}

export default function ContentCard({
  nome,
  href,
  cardImage,
}: Props) {
  const hasImage = Boolean(cardImage);

  return (
    <Link
      href={href}
      className="group"
    >
      <article className="rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400">
        
        <div className="h-44 w-full overflow-hidden bg-slate-100">
          {hasImage ? (
            <Image
              src={cardImage!}
              alt={`${nome} imagem`}
              width={360}
              height={360}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="grid h-full w-full place-items-center px-4 text-center text-sm text-slate-500">
              Imagem não disponível
            </div>
          )}
        </div>

        <div className="px-3 py-4 text-center">
          <p className="text-base font-semibold text-slate-900">
            {nome.trim()}
          </p>
        </div>

      </article>
    </Link>
  );
}