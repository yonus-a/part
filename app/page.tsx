import Achievements from "./components/achievements";
import BusinessDesc from "./components/business-desc";
import Hero from "./components/hero";
import License from "./components/license";
import Products from "./components/products";
import Services from "./components/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <License />
      <BusinessDesc />
      <Services />
      <Achievements />
      <Products />
    </main>
  );
}
