'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { adurasCanticos } from '@/data/adurasCanticos';
import { itans } from '@/data/itans';
import { odus } from '@/data/odus';
import { orixas } from '@/data/orixas';

function normalizeText(text: string) {
  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function buildSearchTerms(...terms: string[]) {
  return Array.from(
    new Set(
      terms
        .map(normalizeText)
        .flatMap((term) => [term, ...term.split(/[\s-]+/)])
        .filter(Boolean),
    ),
  );
}

function getSlugWords(slug: string) {
  return slug.split(/[-/]+/).filter(Boolean);
}

function getCategoryQueries(query: string) {
  if (['orixa', 'orixas'].includes(query)) return ['orixa'];
  if (['odu', 'odus'].includes(query)) return ['odu'];
  if (['itan', 'itans'].includes(query)) return ['itan'];
  if (['adura', 'aduras', 'cantico', 'canticos'].includes(query)) return ['adura'];
  if (['pagina', 'paginas'].includes(query)) return ['page'];
  return [];
}

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
  { href: '/canticos', label: 'Canticos' },
];

export default function Header() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  const searchItems = useMemo(() => {
    const pageItems = [
      { href: '/', displayName: 'Inicio', category: 'Pagina', terms: ['inicio', 'home'] },
      { href: '/itans', displayName: 'Itans', category: 'Pagina', terms: ['itans', 'lendas', 'historias'] },
      { href: '/orixas', displayName: 'Orixas', category: 'Pagina', terms: ['orixas'] },
      { href: '/candomble', displayName: 'O Candomble', category: 'Pagina', terms: ['candomble', 'religiao', 'cultura'] },
      { href: '/aduras-canticos', displayName: 'Aduras', category: 'Pagina', terms: ['aduras', 'canticos', 'rezas'] },
      { href: '/canticos', displayName: 'Canticos', category: 'Pagina', terms: ['canticos', 'orin', 'musicas'] },
      { href: '/herbario', displayName: 'Herbario', category: 'Pagina', terms: ['herbario', 'ervas', 'folhas'] },
      { href: '/odus', displayName: 'Odus', category: 'Pagina', terms: ['odus', 'odu', 'ifa'] },
      { href: '/minha-jornada', displayName: 'Sobre mim', category: 'Pagina', terms: ['sobre mim', 'jornada'] },
    ].map((page) => ({
      ...page,
      type: 'page' as const,
      slug: page.href,
      searchableTerms: buildSearchTerms(page.displayName, page.href, ...page.terms, ...getSlugWords(page.href)),
    }));

    const orixaItems = orixas.map((orixa) => {
      const displayName = orixa.nome.trim();

      return {
        type: 'orixa' as const,
        category: 'Orixa',
        slug: orixa.slug,
        href: `/orixas/${orixa.slug}`,
        displayName,
        searchableTerms: buildSearchTerms(displayName, orixa.slug, ...getSlugWords(orixa.slug)),
      };
    });

    const aduraItems = adurasCanticos.map((adura) => {
      const displayName = adura.nome.trim();
      const searchableName = normalizeText(displayName);
      const searchableShortName = normalizeText(displayName.replace(/^adura\s+/i, ''));

      return {
        type: 'adura' as const,
        category: 'Adura',
        slug: adura.slug,
        href: `/aduras-canticos/${adura.slug}`,
        displayName,
        searchableTerms: buildSearchTerms(searchableName, searchableShortName, adura.slug, ...getSlugWords(adura.slug)),
      };
    });

    const oduItems = odus.map((odu) => ({
      type: 'odu' as const,
      category: 'Odu',
      slug: odu.slug,
      href: `/odus/${odu.slug}`,
      displayName: odu.nome.trim(),
      searchableTerms: buildSearchTerms(odu.nome, odu.slug, ...getSlugWords(odu.slug)),
    }));

    const itanItems = itans.map((itan) => ({
      type: 'itan' as const,
      category: 'Itan',
      slug: itan.slug,
      href: `/itans/${itan.slug}`,
      displayName: itan.nome.trim(),
      searchableTerms: buildSearchTerms(itan.nome, itan.slug, ...getSlugWords(itan.slug)),
    }));

    return [...pageItems, ...orixaItems, ...oduItems, ...itanItems, ...aduraItems];
  }, []);

  const filteredResults = useMemo(() => {
    const query = normalizeText(searchTerm.trim());
    if (!query) return [];
    const categoryTypes = getCategoryQueries(query);
    if (categoryTypes.length > 0) {
      return searchItems.filter((item) => categoryTypes.includes(item.type));
    }

    const queryWithoutTrailingS = query.replace(/s$/i, '');
    return searchItems.filter((item) =>
      item.searchableTerms.some((term) =>
        term.startsWith(query) ||
        term.startsWith(queryWithoutTrailingS),
      ),
    );
  }, [searchTerm, searchItems]);

  useEffect(() => {
    if (!isSearchOpen) return;

    setSearchTerm('');
    inputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!overlayRef.current?.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <header className="w-full bg-[#fff1d0]">

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
                Ancestralidade & Cultura
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
              onClick={() => setIsSearchOpen(true)}
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

          {isSearchOpen ? (
            <div ref={overlayRef} className="absolute right-0 top-full z-20 mt-4 w-full max-w-xl px-3 text-left md:px-0">
              <div className="overflow-hidden rounded-lg border border-[#e9b562] bg-[#fff8e8] shadow-[0_18px_42px_rgba(45,15,4,0.24)]">
                <div className="flex flex-col gap-3 border-b border-[#f0d29b] bg-[#fff2d2] p-3 sm:flex-row sm:items-center">
                  <input
                    ref={inputRef}
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Buscar orixás e aduras..."
                    className="h-11 w-full rounded-full border border-[#dfb56d] bg-white/95 px-4 text-sm font-medium text-[#351106] shadow-inner outline-none placeholder:text-[#9a6b3b] focus:border-[#e88922] focus:ring-2 focus:ring-[#e88922]/20"
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-[#d59543] px-4 text-sm font-bold text-[#6b2a12] transition hover:bg-[#f7a12d] hover:text-[#351106]"
                  >
                    Fechar
                  </button>
                </div>

                <div className="max-h-80 overflow-y-auto p-2">
                  {searchTerm.trim() ? (
                    filteredResults.length > 0 ? (
                      <ul className="space-y-1">
                        {filteredResults.map((item) => (
                          <li key={`${item.type}-${item.slug}`}>
                            <Link
                              href={item.href}
                              onClick={() => setIsSearchOpen(false)}
                              className="flex min-h-11 items-center justify-between gap-3 rounded-md border border-transparent px-3 py-2.5 text-sm text-[#351106] transition hover:border-[#efb35c] hover:bg-[#fff1d0]"
                            >
                              <span className="min-w-0 truncate font-semibold">{item.displayName}</span>
                              <span className="shrink-0 rounded-full bg-[#f4dfb3] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7a4a22]">
                                {item.category}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="rounded-md border border-dashed border-[#e3b365] bg-[#fff1d0] px-4 py-4 text-sm font-medium text-[#8d5c2e]">
                        Nenhum resultado encontrado
                      </p>
                    )
                  ) : (
                    <p className="rounded-md border border-dashed border-[#e3b365] bg-[#fff1d0] px-4 py-4 text-sm font-medium text-[#8d5c2e]">
                      Digite para buscar Orixás e Aduras
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </nav>
      </div>

    </header>
  );
}
