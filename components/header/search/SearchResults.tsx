import Link from 'next/link';

interface SearchResult {
  type: string;
  slug: string;
  href: string;
  displayName: string;
  category: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  searchTerm: string;
  onSelect: () => void;
}

export function SearchResults({ results, searchTerm, onSelect }: SearchResultsProps) {
  if (!searchTerm.trim()) {
    return (
      <p className="rounded-md border border-dashed border-[#e3b365] bg-[#fff1d0] px-4 py-4 text-sm font-medium text-[#8d5c2e]">
        Digite para buscar Orixás e Aduras
      </p>
    );
  }

  if (results.length === 0) {
    return (
      <p className="rounded-md border border-dashed border-[#e3b365] bg-[#fff1d0] px-4 py-4 text-sm font-medium text-[#8d5c2e]">
        Nenhum resultado encontrado
      </p>
    );
  }

  return (
    <div className="max-h-80 overflow-y-auto p-2">
      <ul className="space-y-1">
        {results.map((item) => (
          <li key={`${item.type}-${item.slug}`}>
            <Link
              href={item.href}
              onClick={onSelect}
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
    </div>
  );
}