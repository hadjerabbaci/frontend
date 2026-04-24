import PourquoiNous from "../components/about";
import Footer from "../components/contact";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Categories from "../components/services";
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <PourquoiNous/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
