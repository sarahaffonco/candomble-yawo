import { useMemo, useState } from 'react';
import { adurasCanticos } from '@/data/adurasCanticos';
import { itans } from '@/data/itans';
import { odus } from '@/data/odus';
import { orixas } from '@/data/orixas';
import { buildSearchTerms, getCategoryQueries, normalizeText, getSlugWords } from '../utils/searchUtils';

export function useSearch(searchTerm: string) {
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

    const orixaItems = orixas.map((orixa) => ({
      type: 'orixa' as const,
      category: 'Orixa',
      slug: orixa.slug,
      href: `/orixas/${orixa.slug}`,
      displayName: orixa.nome.trim(),
      searchableTerms: buildSearchTerms(orixa.nome.trim(), orixa.slug, ...getSlugWords(orixa.slug)),
    }));

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

  return useMemo(() => {
    const query = normalizeText(searchTerm.trim());
    if (!query) return [];
    
    const categoryTypes = getCategoryQueries(query);
    if (categoryTypes.length > 0) {
      return searchItems.filter((item) => categoryTypes.includes(item.type));
    }

    const queryWithoutTrailingS = query.replace(/s$/i, '');
    return searchItems.filter((item) =>
      item.searchableTerms.some((term) =>
        term.startsWith(query) || term.startsWith(queryWithoutTrailingS)
      )
    );
  }, [searchTerm, searchItems]);
}