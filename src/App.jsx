import {Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import Header from "./containers/Header/Header";
import ScrollAnimation from "./components/ScrollAnimation/ScrollAnimation";
import ImageHoverEffect from "./components/ImageHoverEffect/ImageHoverEffect";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import Reservation from "./pages/Reservation/Reservation";
import About from "./pages/AboutUs/About";
import Gallery from "./pages/Gallery/Gallery";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dish from "./pages/Dish/Dish";

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
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/dish/:id" element={<Dish />} />
      </Routes>
      <Footer />
    
    </>
  );
}

export default App;
