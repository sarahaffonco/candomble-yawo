// components/OrixaButton.tsx

import Link from "next/link";

interface OrixaButtonProps {
  nome: string;
  slug: string;
  cor: string;
}

const colorClasses = {
  red: "border-red-700 text-red-700 hover:bg-red-700 hover:text-white",
  blue: "border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white",
  green: "border-green-700 text-green-700 hover:bg-green-700 hover:text-white",
  yellow: "border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-white",
  purple: "border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white",
  rainbow: "border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white",
  brown: "border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white",
  orange: "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white",
  pink: "border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white",
  white: "border-stone-200 text-stone-700 hover:bg-stone-200 hover:text-stone-900",
  black: "border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white",
  gray: "border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white",
};

export default function AduraButton({
  nome,
  slug,
  cor,
}: OrixaButtonProps) {
  return (
    <Link href={`/aduras-canticos/${slug}`}>
      <button
        className={`
          w-full
          px-4
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