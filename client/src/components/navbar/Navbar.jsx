import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo"><a href="#header" onClick={closeMenu}>AllanDev</a></div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#bio" onClick={closeMenu}>Bio</a>
        <a href="#footer" onClick={closeMenu}>Footer</a>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </div>
    </nav>
  );
}

export default Navbar;
