import { TrailDropdown } from './TrailDropdown';

interface CandombleDropdownProps {
  isActive: (href: string) => boolean;
  onSelect: () => void;
}

export function CandombleDropdown({ isActive, onSelect }: CandombleDropdownProps) {
  const items = [
    { href: '/candomble', label: 'Diversidade das tradições' },
    { href: '/orixas', label: 'Orixás' },
    { href: '/itans', label: 'Itans' },
    { href: '/vocabulario', label: 'Vocabulário básico' },
  ];

  return (
    <TrailDropdown
      eyebrow="Trilha 1"
      title="O Candomblé"
      description="Conheça suas origens, fundamentos e expressões."
      image="/images/candomble.png"
      items={items}
      isActive={isActive}
      onSelect={onSelect}
    />
  );
}