import Link from "next/link";

interface Props {
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

  orange:
    "text-orange-700 border-orange-700 hover:bg-orange-700 hover:text-white",

  purple:
    "text-purple-700 border-purple-700 hover:bg-purple-700 hover:text-white",

  pink:
    "text-pink-700 border-pink-700 hover:bg-pink-700 hover:text-white",

  brown:
    "text-amber-900 border-amber-900 hover:bg-amber-900 hover:text-white",

  black:
    "text-black border-black hover:bg-black hover:text-white",

  gray:
    "text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white",

  white:
    "text-gray-800 border-gray-300 bg-white hover:bg-gray-100",

  rainbow:
    "text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-white",
};

export default function OrixaButton({
  nome,
  slug,
  cor,
}: Props) {
  return (
    <Link href={`/orixas/${slug}`}>
      <button
        className={`
          w-full
          rounded-lg
          border-2
          px-4
          py-3
          font-semibold
          transition
          duration-300
          ${colorClasses[cor as keyof typeof colorClasses]}
        `}
      >
        {nome}
      </button>
    </Link>
  );
}