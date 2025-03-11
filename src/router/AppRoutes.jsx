import {Routes, Route } from "react-router-dom";
import { Home, About, Contact, Menu, Gallery, Reservation, Dish, Login, Register } from '../pages';

const AppRoute = () => {
    return (
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
    );
  };
  
  export default AppRoute;

