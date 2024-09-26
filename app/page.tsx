import Hero from "./components/Hero";
import TopRestaurants from "./components/TopRestaurants";
import Pizzas from "./components/Pizzas";
import Fasting from "./components/Fasting";
import Footer from "./components/Footer";
import Feautred from "./components/Feautred";

export default function Home() {
  return (
   <>
    <Hero />
    <Feautred />
    <TopRestaurants />
    <Pizzas />
    <Fasting />
    <Footer />
   </>
  );
}
