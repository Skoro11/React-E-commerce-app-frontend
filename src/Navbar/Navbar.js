import React, { useState } from "react";
import "./Navbar.css";  // For the styles

// Importing custom PNG icons
import userIcon from '../assets/icons/user-icon.png';  
import cartIcon from '../assets/icons/cart-icon.png'; 
import heartIcon from '../assets/icons/heart-icon.png';
import searchIcon from '../assets/icons/search-icon.png';
// Importing React Icons
import { FaCog, FaListAlt, FaRegWindowClose, FaStar, FaSignOutAlt} from 'react-icons/fa';

function Navbar() {
  // State to toggle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="sale">
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="underlined">Shop now</span>

      </div>
      <div className="bordered">
        <div className="navbar__logo">
          <h1>Lexus</h1>
        </div>

        <ul className="navbar__links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Contact</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/about">Sign up</a></li>
          <li><a href="/login">Admin</a></li>
        </ul>

        <div className="navbar__right">
        <div className="navbar__search">
        <input 
          type="text" 
          placeholder="What are you looking for? " 
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-btn">
          <img src={searchIcon} alt="Search icon" />{/* Search icon */}
        </button>
      </div>

        <div className="navbar__heart">
            <img src={heartIcon} alt="Heart Icon" className="navbar__icon" /> {/* Heart Icon */}
          </div>
          
          <div className="navbar__cart">
            <img src={cartIcon} alt="Shopping Cart Icon" className="navbar__icon" /> {/* Shopping Cart Icon */}
          </div>
          <div className="navbar__user-icon"  onClick={toggleDropdown} >
            <img src={userIcon} alt="User Icon" className="navbar__icon" /> {/* User Icon */}
          </div>
          
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="navbar__dropdown">
            <ul>
              <li><FaCog /> Manage my account</li>
              <li><FaListAlt /> My Orders</li>
              <li><FaRegWindowClose /> My Cancellations</li>
              <li><FaStar /> My Reviews</li>
              <li><FaSignOutAlt /> Logout</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
