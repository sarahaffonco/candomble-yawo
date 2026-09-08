import { useState } from 'react';
import { CandombleDropdown } from './dropdowns/CandombleDropdown';
import { TrailDropdown } from './dropdowns/TrailDropdown';
import { DropdownMenu } from './dropdowns/DropdownMenu';
import { SearchButton } from './search/SearchButton';
import { Logo } from './Logo';
import Link from 'next/link';
import { menuGroups } from './constants/menuData';

interface HeaderNavProps {
  isActive: (href: string) => boolean;
  onSearchOpen: () => void;
}

export function HeaderNav({ isActive, onSearchOpen }: HeaderNavProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="relative z-10 grid w-full max-w-280 grid-cols-1 items-center gap-5 text-center lg:grid-cols-[1fr_auto_1fr]">
      {/* Menu Left */}
      <div className="flex min-w-0 items-center justify-center gap-5 lg:justify-end xl:gap-8">
        <Link
          href="/"
          className={`relative pb-2 text-sm font-bold text-[#ffe7bb] transition hover:text-[#f7a12d] ${
            isActive('/') 
              ? 'text-[#f7a12d] after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:rounded-full after:bg-[#f7a12d]' 
              : ''
          }`}
        >
          Início
        </Link>
        <div className="relative">
          <button
            type="button"
            aria-expanded={openMenu === 'candomble'}
            aria-haspopup="menu"
            onClick={() => setOpenMenu(openMenu === 'candomble' ? null : 'candomble')}
            className="flex items-center gap-2 pb-2 text-sm font-bold text-[#ffe7bb] transition hover:text-[#f7a12d]"
          >
            O Candomblé
            <span className={`text-xs transition-transform ${openMenu === 'candomble' ? 'rotate-180' : ''}`}>⌄</span>
          </button>
          {openMenu === 'candomble' && (
            <CandombleDropdown isActive={isActive} onSelect={() => setOpenMenu(null)} />
          )}
        </div>
      </div>

      {/* Logo */}
      <Logo />

      {/* Menu Right */}
      <div className="flex min-w-0 items-center justify-center gap-5 lg:justify-start l:gap-8">
        {menuGroups.slice(1).map((group) => (
          <div className="relative" key={group.id}>
            <button
              type="button"
              aria-expanded={openMenu === group.id}
              aria-haspopup="menu"
              onClick={() => setOpenMenu(openMenu === group.id ? null : group.id)}
              className="flex items-center gap-2 pb-2 text-sm font-bold text-[#ffe7bb] transition hover:text-[#f7a12d]"
            >
              {group.label}
              <span className={`text-sm transition-transform ${openMenu === group.id ? 'rotate-180' : ''}`}>⌄</span>
            </button>
            {openMenu === group.id && (
              group.id === 'saberes' ? (
                <TrailDropdown
                  eyebrow="Trilha 2"
                  title="Saberes"
                  description="Explore os elementos, práticas e conhecimentos que sustentam o Candomblé."
                  image="/images/sobre.png"
                  items={group.items}
                  isActive={isActive}
                  onSelect={() => setOpenMenu(null)}
                />
              ) : group.id === 'memoria' ? (
                <TrailDropdown
                  eyebrow="Trilha 3"
                  title="Memória e patrimônio"
                  description="Valorize as histórias, os territórios e as referências que preservam essa cultura."
                  image="/images/memoria.png"
                  items={group.items}
                  isActive={isActive}
                  onSelect={() => setOpenMenu(null)}
                />
              ) : (
                <DropdownMenu items={group.items} isActive={isActive} onSelect={() => setOpenMenu(null)} />
              )
            )}
          </div>
        ))}

        <SearchButton onClick={onSearchOpen} />
      </div>
    </nav>
  );
}