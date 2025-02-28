import {Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import Header from "./containers/Header/Header";
import ScrollAnimation from "./components/ScrollAnimation/ScrollAnimation";
import ImageHoverEffect from "./components/ImageHoverEffect/ImageHoverEffect";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      
      <ScrollAnimation />
      <ImageHoverEffect />
      <TopBar extraClass={"top-bar d-none d-lg-block py-2 px-3"} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    
    </>
  );
}

export default App;
