import Features from "../components/Features";
import About from "../components/About";
import Blog from "../components/Blog";
import FeaturedTours from "../components/FeaturedTours";
import Hero from "../components/Hero";
import PromoCode from "../components/PromoCode";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import TourSearch from "../components/TourSearch";

function Home() {
  return (
    <div>
      <Hero />
      <TourSearch />
      <About />
      <FeaturedTours />
      <Statistics />
      <Services />
      <Features />
      <Blog />
      <PromoCode/>
    </div>
  );
}

export default Home;
