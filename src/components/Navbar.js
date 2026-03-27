import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <h2>Resume</h2>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li><Link to="home" smooth duration={500} onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="about" smooth duration={500} onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="skills" smooth duration={500} onClick={() => setOpen(false)}>Skills</Link></li>
        <li><Link to="experience" smooth duration={500} onClick={() => setOpen(false)}>Experience</Link></li>
        <li><Link to="projects" smooth duration={500} onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link to="education" smooth duration={500} onClick={() => setOpen(false)}>Education</Link></li>
        <li><Link to="contact" smooth duration={500} onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;