import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-3xl text-purple-500 items-center"
        >
          .Gls.
        </motion.div>
      </a>
      <nav className="navbar">
        <Link href="/home">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact Me</Link>
      </nav>
    </header>
  );
};

export default Navbar;
