import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="group flex min-w-0 items-center justify-center gap-2 xl:gap-3">
      <div className="text-center">
        <strong className="block font-serif text-3xl font-bold uppercase leading-none tracking-wide text-[#ffe8bd] drop-shadow-[0_3px_0_rgba(46,13,2,0.72)] xl:text-4xl">
          Candomblé
        </strong>
        <span className="mt-2 block text-xs font-semibold uppercase text-[#ffca6a] md:text-sm">
          Conhecimento · Memória · Cultura
        </span>
      </div>
    </Link>
  );
}