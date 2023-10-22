import getHomePageData from "@server-action/getHomePageData";
import Achievements from "../components/achievements";
import BusinessDesc from "../components/business-desc";
import Products from "../components/products";
import Services from "../components/services";
import License from "../components/license";
import Hero from "../components/hero";

export default async function Home() {
  const data = (await getHomePageData())[0];

  return (
    <main>
      <Hero />
      <License />
      <BusinessDesc text={data.about} image={data.aboutImage} />
      <Services text={data.services} image={data.servicesImage} />
      <Achievements />
      <Products />
    </main>
  );
}
