
<<<<<<< Updated upstream
export default function Home() {
  return <main>Herbario</main>;
}
=======
import Header from "@/components/header/Header";
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
>>>>>>> Stashed changes
