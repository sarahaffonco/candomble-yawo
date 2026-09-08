import Header from "@/components/header";
import HerbariumBook from "@/components/HerbariumBook";
import { ervas } from "@/data/ervas";

export default function HerbarioPage() {
  return (
    <div>
      <Header />

        <div className="h-4" />

      <main className="herbarium-main">

        <HerbariumBook ervas={ervas} />

      </main>
    </div>
  );
}