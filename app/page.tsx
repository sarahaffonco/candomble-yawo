import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Blog de Candomblé</h1>

      <Link href="/orixas/oxum">
        Oxum
      </Link>
            <Link href="/aduras-canticos">
        Aduras e Canticos
      </Link>
    </main>
  );
}