import About from "../components/about";
import ContactUs from "../components/contact-us";
import Hero from "../components/hero";
import Licences from "../components/licences";
import Products from "../components/products";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <About />
      <Licences />
      <ContactUs />
    </main>
  );
}
