export function normalizeText(text: string) {
  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function buildSearchTerms(...terms: string[]) {
  return Array.from(
    new Set(
      terms
        .map(normalizeText)
        .flatMap((term) => [term, ...term.split(/[\s-]+/)])
        .filter(Boolean),
    ),
  );
}

export function getSlugWords(slug: string) {
  return slug.split(/[-/]+/).filter(Boolean);
}

export function getCategoryQueries(query: string) {
  const normalized = normalizeText(query);
  if (['orixa', 'orixas'].includes(normalized)) return ['orixa'];
  if (['odu', 'odus'].includes(normalized)) return ['odu'];
  if (['itan', 'itans'].includes(normalized)) return ['itan'];
  if (['adura', 'aduras', 'cantico', 'canticos'].includes(normalized)) return ['adura'];
  if (['pagina', 'paginas'].includes(normalized)) return ['page'];
  return [];
}