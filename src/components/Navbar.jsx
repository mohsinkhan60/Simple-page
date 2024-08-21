import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <h1 className="hading">Mohsin Dev</h1>
      <nav className="navbar">
        <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a className="navbar-links" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="navbar-links" href="#">
              About
            </a>
          </li>
          <li>
            <a className="navbar-links" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="navbar-links" href="#">
              Gallery
            </a>
          </li>
          <li>
            <a className="navbar-links" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="menuc-icon">
            <VscChromeClose />
          </div>
        ) : (
          <div className="menum-icon">
            <IoMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;