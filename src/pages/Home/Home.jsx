/**
 * Home Page import all the containers and components 
 * { Hero, About, Specials, Chefs, GallerySection} is containers not pages
 * { ScrollAnimation } is a component
 */
import { ScrollAnimation } from "../../components";
import { Hero, About, Specials, Chefs, GallerySection} from "../../containers";

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
