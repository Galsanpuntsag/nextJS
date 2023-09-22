import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import About from "../about";

const Header = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Navbar />
      </motion.div>
    </>
  );
};

export default Header;
