import React, { useState } from "react";
import "../App.css";
import logo from "../assets/images/uxx.png";
// import { NavHashLink } from 'react-router-hash-link';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-trans fixed-top bg-primary">
      <div className="container-lg">
        <a className="navbar-brand" href="#home">
          <img src={logo} style={{ maxWidth: "40px" }} alt="img" />
          My Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#work">
                WORK
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#comments"
              >
                COMMENTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#contact"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
