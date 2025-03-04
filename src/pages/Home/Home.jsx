import  Hero from "../../containers/Hero/Hero"
import About from "../../containers/About/About"
import Specials from "../../containers/Specials/Specials";
import Chefs from "../../containers/Chefs/Chefs";
import GallerySection from "../../containers/GallerySection/GallerySection";

function Home() {
    return (
      <>
        <Hero />
        <About />
        <Specials />
        <Chefs />
        <GallerySection />
      </>
    );
  }
  
  export default Home;
  