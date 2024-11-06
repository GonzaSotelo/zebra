import './Header.css';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header__zebra ${isScrolled ? 'scrolled' : ''}`}>
        <div className='container__logo'>Logo</div>
        <nav className='navbar__zebra'>
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
          <ul className={isMenuOpen ? 'menu-active' : 'menu-desactive'}>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contáctanos</a></li>
          </ul>
        </nav>
      </header>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Header;
