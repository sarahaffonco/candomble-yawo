'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { HeaderNav } from './HeaderNav';
import { SearchModal } from './search/SearchModal';
import '@/styles/Header.css';
export default function Header() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <header className="w-full bg-[#fff1d0]">
      <div className="header-shell relative flex min-h-35.5 items-center justify-center px-3 py-5 md:px-4">
        <HeaderNav 
          isActive={isActive} 
          onSearchOpen={() => setIsSearchOpen(true)}
        />
        {isSearchOpen && (
          <SearchModal
            isOpen={isSearchOpen} 
            onClose={() => setIsSearchOpen(false)} 
          />
        )}
      </div>
    </header>
  );
}