import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Categories from "../components/services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
    </div>
  );
}
