import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-header">
        <div className="brand">
          <Link to="/" className="logo">
            <img src="/images/NevesFit.png" alt="NevesFit Logo" className="logo-image" />
          </Link>
          <span className="tagline">by Allan Web Development</span>
        </div>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li>
          <NavLink end to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>
        </li>
        {/* <li><NavLink to="/stories" onClick={() => setOpen(false)}>Success Stories</NavLink></li> */}
        <li>
          <NavLink to="/book" onClick={() => setOpen(false)}>
            Schedule a Consultation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
