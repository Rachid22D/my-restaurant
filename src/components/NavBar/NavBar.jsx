import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TopBar from "../TopBar/TopBar";
import styles from "./NavBar.module.css";

const Navbar = () => {
  // Get the current location to determine the active link
  const location = useLocation();
  
  // State variables to manage navbar behavior
  const [isSticky, setIsSticky] = useState(false); // Controls sticky navbar
  const [isHidden, setIsHidden] = useState(false); // Controls navbar visibility when scrolling
  const [menuOpen, setMenuOpen] = useState(false); // Controls mobile menu visibility
  const [isHovered, setIsHovered] = useState(false); // Checks if navbar is hovered

  // Refs to store the last scroll position and timeout for hiding navbar
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  // Close the mobile menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsSticky(currentScrollY > 50); // Make navbar sticky after scrolling 50px

      // Hide navbar when scrolling down after 50px
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;

      // Use a timeout to hide the navbar after 5 seconds if not hovered
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        if (!isHovered && currentScrollY > 50) {
          setIsHidden(true);
        }
      }, 5000);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup event listener and timeout on component unmount
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [isHovered]);

  // Helper function to check if a link is active based on the current path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="text-white text-center">
      <nav
        className={`navbar navbar-expand-lg fixed-top ${isSticky ? 'sticky-navbar' : ''} ${isHidden ? 'navbar-hidden' : ''} ${styles.navbar || ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container">
          {/* Website logo / brand */}
          <Link className="navbar-brand" to="/">
            EatMORE
          </Link>

          {/* Mobile menu toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          {/* Navbar links */}
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/menu') ? 'active' : ''}`} to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/reservation') ? 'active' : ''}`} to="/reservation">Reservation</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/gallery') ? 'active' : ''}`} to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Authentication buttons */}
            <div className="register-btn ms-auto d-flex align-items-center">
              <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
              <Link to="/register" className="btn btn-warning">Sign Up</Link>
            </div>

            {/* Top bar for smaller screens */}
            <TopBar
              extraClass="top-bar d-lg-none"
              containerClass="container d-flex flex-column align-items-center"
              infoItemClass="myInfoItem"
            />

            {/* Close icon for mobile menu */}
            <ion-icon
              name="close-circle-outline"
              className="close-icon"
              style={{ color: 'var(--text-color)' }}
              onClick={() => setMenuOpen(false)}
            ></ion-icon>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;