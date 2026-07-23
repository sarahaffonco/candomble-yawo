// components/OrixaButton.tsx

import Link from "next/link";

interface OrixaButtonProps {
  nome: string;
  slug: string;
  cor: string;
}

const colorClasses = {
  yellow:
    "text-yellow-700 border-yellow-700 hover:bg-yellow-700 hover:text-white",

  blue:
    "text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white",

  red:
    "text-red-700 border-red-700 hover:bg-red-700 hover:text-white",

  green:
    "text-green-700 border-green-700 hover:bg-green-700 hover:text-white",
};

export default function OrixaButton({
  nome,
  slug,
  cor,
}: OrixaButtonProps) {
  return (
    <Link href={`/orixas/${slug}`}>
      <button
        className={`
          px-5
          py-3
          rounded-lg
          border-2
          font-semibold
          transition
          duration-300
          cursor-pointer
          ${colorClasses[cor as keyof typeof colorClasses]}
        `}
      >
        {nome}
      </button>
    </Link>
  );
}