'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const leftLinks = [
  { href: '/', label: 'Início' },
  { href: '/itans', label: 'Itans' },
  { href: '/orixas', label: 'Orixás' },
  { href: '/candomble', label: 'O Candomblé' },
];

const rightLinks = [
  { href: '/aduras-canticos', label: 'Aduras' },
  { href: '/herbario', label: 'Herbário' },
  { href: '/odus', label: 'Odus' },
  { href: '/minha-jornada', label: 'Sobre mim' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <header className="w-full overflow-hidden bg-[#fff1d0]">

      <div className="relative flex min-h-35.5 items-center justify-center bg-[radial-gradient(circle_at_center,#9a3d15_0%,#5b1f0e_46%,#321005_100%)] px-3 py-5 shadow-[inset_0_12px_24px_rgba(0,0,0,0.32),inset_0_-12px_20px_rgba(0,0,0,0.28)] md:px-4">
        <div className="absolute left-0 right-0 top-0 h-2.5 bg-[#e75a18]" />
        <div className="absolute bottom-0 left-0 right-0 h-2.5 bg-[#e75a18]" />

        <nav className="relative z-10 grid w-full max-w-280 grid-cols-1 items-center gap-4 text-center lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-end xl:gap-x-4">
            {leftLinks.map((link, index) => {
              const active = isActive(link.href);

              return (
                <React.Fragment key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative pb-2 text-sm font-bold uppercase text-[#ffe7bb] transition hover:text-[#f7a12d] ${
                      active ? 'text-[#f7a12d] after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:rounded-full after:bg-[#f7a12d]' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                  {index < leftLinks.length - 1 ? (
                    <span className="hidden h-7 w-px bg-[#d97824] md:block" aria-hidden="true" />
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>

          <Link href="/" className="group flex min-w-0 items-center justify-center gap-2 xl:gap-3">
            <div className="text-center">
              <strong className="block font-serif text-3xl font-bold uppercase leading-none text-[#ffe8bd] drop-shadow-[0_3px_0_rgba(46,13,2,0.72)] xl:text-4xl">
                Candomblé
              </strong>
              <span className="mt-2 block text-xs font-semibold uppercase text-[#ffca6a] md:text-sm">
                Ancestralidade • Fé • Cultura
              </span>
            </div>


          </Link>

          <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:flex-nowrap lg:justify-start xl:gap-x-4">
            {rightLinks.map((link, index) => {
              const active = isActive(link.href);

              return (
                <React.Fragment key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative pb-2 text-sm font-bold uppercase text-[#ffe7bb] transition hover:text-[#f7a12d] ${
                      active ? 'text-[#f7a12d] after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:rounded-full after:bg-[#f7a12d]' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                  {index < rightLinks.length - 1 ? (
                    <span className="hidden h-7 w-px bg-[#d97824] md:block" aria-hidden="true" />
                  ) : null}
                </React.Fragment>
              );
            })}

            <button
              type="button"
              aria-label="Buscar"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#f7a12d] text-[#f7a12d] transition hover:bg-[#f7a12d] hover:text-[#351106]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16.5 16.5 4 4" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

    </header>
  );
}
