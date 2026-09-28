import {
  FiMenu,
  FiSearch,
  FiBell,
  FiUser,
} from "react-icons/fi";
import { PiCardsBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

import "./Navbar.css";

function Navbar({ onMenuClick }) {
  return (
    <header className="top-navbar">

      <div className="navbar-left">

        <button
          className="menu-button"
          onClick={onMenuClick}
        >
          <FiMenu />
        </button>

        <div className="brand">
          <span className="brand-icon">
            <PiCardsBold />
          </span>

          <span>BankDash.</span>
        </div>

      </div>

      <div className="navbar-actions">

        <div className="search-box">
          <FiSearch />

          <input
            type="text"
            placeholder="Search"
          />
        </div>

        <button className="icon-button">
          <IoSettingsOutline />
        </button>

        <button className="icon-button">
          <FiBell />
        </button>

        <button className="profile-button">
          <span className="profile-image">
            <FiUser />
          </span>
        </button>

      </div>

    </header>
  );
}

export default Navbar;