interface SearchButtonProps {
  onClick: () => void;
}

export function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      type="button"
      aria-label="Buscar"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#f7a12d] text-[#f7a12d] transition hover:bg-[#f7a12d] hover:text-[#351106]"
      onClick={onClick}
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
  );
}