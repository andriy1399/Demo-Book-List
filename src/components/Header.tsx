import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/header.scss'
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Book List
        </Link>
        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className={`navbar-nav ${isOpen ? 'hide' : ''}`} >
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link "
                activeClassName="active"
                exact
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/books/create"
                className="nav-link"
                activeClassName="active"
                exact
              >
                Add a Book
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
