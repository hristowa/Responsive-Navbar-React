import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Gallery</a>
        <a href="#">Contacts</a>
        <button className="btn close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
