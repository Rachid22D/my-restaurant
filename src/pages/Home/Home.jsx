import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation";
import Hero from "../../containers/Hero/Hero";
import About from "../../containers/About/About";
import Specials from "../../containers/Specials/Specials";
import Chefs from "../../containers/Chefs/Chefs";
import GallerySection from "../../containers/GallerySection/GallerySection";

function Home() {
  return (
    <div className="home">
      <ScrollAnimation />
      <Hero />
      <About />
      <Specials />
      <Chefs />
      <GallerySection />
    </div>
  );
}

export default Home;
