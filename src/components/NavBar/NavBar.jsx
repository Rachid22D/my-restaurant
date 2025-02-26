import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TopBar from "../TopBar/TopBar";
import styles from "./NavBar.module.css";


const Navbar = () => {
  // استخدام useLocation لتحديد الرابط النشط بناءً على المسار الحالي
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // مراجع لتخزين آخر قيمة scroll و timeout
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  // إغلاق قائمة الموبايل عند تغيير المسار
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsSticky(currentScrollY > 50);

      // إخفاء النافبار عند التمرير لأسفل بعد 50 بكسل
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;

      // استخدام timeout لإخفاء النافبار بعد 5 ثوانٍ إذا لم يكن الماوس فوقه
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        if (!isHovered && currentScrollY > 50) {
          setIsHidden(true);
        }
      }, 5000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [isHovered]);

  // دالة مساعدة لتحديد إذا كان الرابط نشطاً بناءً على المسار الحالي
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
          <Link className="navbar-brand" to="/">
            EatMORE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/menu') ? 'active' : ''}`}
                  to="/menu"
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/reservation') ? 'active' : ''}`}
                  to="/reservation"
                >
                  Reservation
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="register-btn ms-auto d-flex align-items-center">
              <Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to="/register" className="btn btn-warning">
                Sign Up
              </Link>
            </div>
            <TopBar
              extraClass="top-bar d-lg-none"
              containerClass="container d-flex flex-column align-items-center"
              infoItemClass="myInfoItem"
            />
            {/* أيقونة الإغلاق لقائمة الموبايل */}
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


