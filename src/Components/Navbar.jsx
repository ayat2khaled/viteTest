import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>START FRAMEWORK</h1>
      <ul style={styles.navLinks}>
        <li><NavLink to="/about" style={styles.link}>ABOUT</NavLink></li>
        <li><NavLink to="/portfolio" style={styles.link}>PORTFOLIO</NavLink></li>
        <li><NavLink to="/contact" style={styles.link}>CONTACT</NavLink></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#2c3e50",
    color: "#fff",
  },
  logo: { fontSize: "25px", fontWeight: "bold" },
  navLinks: { listStyleType: "none", display: "flex", gap: "15px" },
  link: { textDecoration: "none", color: "#fff", padding:"8px 12px", borderRadius:"4px", transition:"background-color 0.3s ease", fontSize: "18px", fontWeight: "bold"},
  
};

export default Navbar;