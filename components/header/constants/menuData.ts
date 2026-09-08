export const menuGroups = [
  {
    id: 'candomble',
    label: 'O Candomblé',
    items: [
      { href: '/candomble', label: 'Diversidade das tradições' },
      { href: '/orixas', label: 'Orixás' },
      { href: '/itans', label: 'Itans' },
      { href: '/candomble#vocabulario', label: 'Vocabulário' },
    ],
  },
  {
    id: 'saberes',
    label: 'Saberes',
    items: [
      { href: '/herbario', label: 'Herbário' },
      { href: '/minha-jornada', label: 'Vivências' },
      { href: '/odus', label: 'Elementos' },
    ],
  },
  {
    id: 'memoria',
    label: 'Memória e patrimônio',
    items: [
      { href: '/itans', label: 'Memória cultural' },
      { href: '/candomble#mapa', label: 'Mapeamento' },
    ],
  },
] as const;