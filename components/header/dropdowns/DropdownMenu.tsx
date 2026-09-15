import Link from 'next/link';

interface DropdownMenuProps {
  items: readonly { href: string; label: string }[];
  isActive: (href: string) => boolean;
  onSelect: () => void;
}

export function DropdownMenu({ items, isActive, onSelect }: DropdownMenuProps) {
  return (
    <div className="absolute left-1/2 top-full z-30 mt-4 w-64 -translate-x-1/2 rounded-sm border border-[#e1bd83] bg-[#fff7e8] p-2 text-left shadow-[0_14px_30px_rgba(45,15,4,0.28)] before:absolute before:-top-2 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-l before:border-t before:border-[#e1bd83] before:bg-[#fff7e8]">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onSelect}
          className={`relative z-10 block border-b border-[#ecd9b9] px-3 py-2.5 text-sm transition last:border-0 hover:bg-[#f7e4c2] ${
            isActive(item.href) ? 'font-bold text-[#a3481e]' : 'text-[#432017]'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}