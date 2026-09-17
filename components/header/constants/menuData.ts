export const menuGroups = [
  {
    id: 'candomble',
    label: 'O Candomblé',
    items: [
      { href: '/candomble', label: 'Diversidade das tradições' },
      { href: '/orixas', label: 'Orixás' },
      { href: '/itans', label: 'Itans' },
      { href: '/vocabulario', label: 'Vocabulário' },
    ],
  },
  {
    id: 'saberes',
    label: 'Saberes',
    items: [
            { href: '/herbario', label: 'Herbário' },
      {href: '/orin-ewe', label: 'Orin de Ewe'},
      { href: '/aduras-canticos', label: 'Aduras' },
      { href: '/canticos', label: 'Canticos' },
      { href: '/vivencias', label: 'Vivências' },
      { href: '/elementos', label: 'Elementos' },
    ],
  },
  {
    id: 'memoria',
    label: 'Memória e patrimônio',
    items: [
      { href: '/memoria-cultural', label: 'Memória cultural' },
      { href: '/mapeamento', label: 'Mapeamento' },
    ],
  },
] as const;