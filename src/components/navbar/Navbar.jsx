import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar__container">
      <header className="sarlavha">
        <div className="sarlavha__yuqori">

  <button className="qidiruv desktop-search">
    <FiSearch />
  </button>

  <div className="logo">
    <Link to="/" className="logo__yozuv">
      Avion
    </Link>
  </div>

  <div className="amallar">

    <button className="qidiruv mobile-search">
      <FiSearch />
    </button>

    <button className="ikonka kompyuterda">
      <FiShoppingCart />
    </button>

    <button className="ikonka kompyuterda">
      <FiUser />
    </button>

    <button
      className="menyu_tugmasi"
      onClick={() => setIsMenuOpen(true)}
    >
      <FiMenu />
    </button>

  </div>

</div>
        <nav className="menu">

          <Link to="/" className="menu__havola">
            Plant pots
          </Link>

          <Link to="/ceramics" className="menu__havola">
            Ceramics
          </Link>

          <Link to="/tables" className="menu__havola">
            Tables
          </Link>

          <Link to="/chairs" className="menu__havola">
            Chairs
          </Link>

          <Link to="/crockery" className="menu__havola">
            Crockery
          </Link>

          <Link to="/tableware" className="menu__havola">
            Tableware
          </Link>

          <Link to="/cutlery" className="menu__havola">
            Cutlery
          </Link>

        </nav>

      </header>

      <div
        className={`mobil_soya ${
          isMenuOpen ? "mobil_soya__ochiq" : ""
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <aside
        className={`mobil_menu ${
          isMenuOpen ? "mobil_menu__ochiq" : ""
        }`}
      >
        <div className="mobil_menu__yuqori">

          <div className="mobil_menu__logo">
            Avion
          </div>

          <div className="mobil_menu__amallar">

            <button className="mobil_menu__ikonka">
              <FiShoppingCart />
            </button>

            <button className="mobil_menu__ikonka">
              <FiUser />
            </button>

            <button
              className="mobil_menu__ikonka"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiX />
            </button>

          </div>

        </div>

        <div className="mobil_menu__sahifalar">

          <Link
            to="/"
            className="mobil_menu__havola"
            onClick={() => setIsMenuOpen(false)}
          >
            Plant pots
          </Link>

          <Link
            to="/ceramics"
            className="mobil_menu__havola"
            onClick={() => setIsMenuOpen(false)}
          >
            Ceramics
          </Link>

          <Link
            to="/tables"
            className="mobil_menu__havola"
            onClick={() => setIsMenuOpen(false)}
          >
            Tables
          </Link>

          <Link
            to="/chairs"
            className="mobil_menu__havola"
            onClick={() => setIsMenuOpen(false)}
          >
            Chairs
          </Link>

          <Link
            to="/crockery"
            className="mobil_menu__havola"
            onClick={() => setIsMenuOpen(false)}
          >
            Crockery
          </Link>

          <Link
            to="/tableware"
            className="mobil_menu__havola"
            onClick={() => setIsMenuOpen(false)}
          >
            Tableware
          </Link>

          <Link
            to="/cutlery"
            className="mobil_menu__havola"
            onClick={() => setIsMenuOpen(false)}
          >
            Cutlery
          </Link>

        </div>

      </aside>
    </div>
  );
};

export default Navbar;