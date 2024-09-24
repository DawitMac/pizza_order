import Image from "next/image";
import Hero from "./components/Hero";
import TopRestaurants from "./components/TopRestaurants";
import Pizzas from "./components/Pizzas";
import Fasting from "./components/Fasting";

export default function Home() {
  return (
   <div>
    <Hero />
    <TopRestaurants />
    <Pizzas />
    <Fasting />
   </div>
  );
}
