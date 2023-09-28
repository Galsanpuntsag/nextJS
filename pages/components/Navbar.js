import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="header">
      <a
        href="/"
        className="text-1xl text-[cyan] italic mt-[20px] items-center"
      >
        <motion.div
          className=" p-2"
          animate={{
            scale: [1, 2, 1, 1],
            rotate: [0, 0, 180, 0],
            borderRadius: ["50%", "20%", "50%", "0%"],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          .GLS.
        </motion.div>
      </a>
      <nav className="navbar">
        <Link href="/home">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/services">Services</Link>
        <Link href="/lastproject">Project</Link>
        <Link href="/contact">Contact Me</Link>
      </nav>
    </header>
  );
};

export default Navbar;
