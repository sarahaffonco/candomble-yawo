import { useRef, useEffect } from 'react';
import { useSearch } from '../hooks/useSearch';
import { SearchResults } from './SearchResults';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const results = useSearch(searchTerm);

  useEffect(() => {
    if (!isOpen) return;
    setSearchTerm('');
    inputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!overlayRef.current?.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
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
            onClick={onClose}
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-[#d59543] px-4 text-sm font-bold text-[#6b2a12] transition hover:bg-[#f7a12d] hover:text-[#351106]"
          >
            Fechar
          </button>
        </div>
        <SearchResults results={results} searchTerm={searchTerm} onSelect={onClose} />
      </div>
    </div>
  );
}