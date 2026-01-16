import React from 'react'
import Container from 'react-bootstrap/Container';
import { FaRegMoon } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import {  useState } from 'react';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <div className="navbar fixed-top">
      <div className="part1">
        <img src="../Photos/React logo.jfif" alt="" />
        <a href="https://react.dev/versions">v19.2</a>
      </div>
      <div className="part2">
        <input type="text" placeholder=' Search Ctrl K'/>
        <span className="search-icon"><IoSearch /></span>
      </div>
      <div className={`part3 ${menuOpen ? "show" : ""}`}>
        <a href="#">Learn</a>
        <a href="#">Reference</a>
        <a href="#">Community</a>
        <a href="#">Blog</a>
      </div>
      <div className="part4">
        <FaRegMoon />
        <IoLanguageSharp />
        <IoLogoGithub />
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
    </div>
    </>
    
  )
}

export default Navbar