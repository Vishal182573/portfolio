import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDestiny = (id) => {
    const destination = document.getElementById(id);
    if (destination) {
      destination.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { name: "Home", id: "Home" },
    { name: "Past Journey", id: "Past-Experience" },
    { name: "Skills Set", id: "Skills-Set" },
    { name: "Projects", id: "Projects" },
    { name: "Contact Me", id: "Contact-Me" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        (scrolled || isOpen) ? "bg-black bg-opacity-80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a
          href="/"
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.a>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollDestiny(item.id)}
              className="text-white hover:text-[#aaaaf4] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  scrollDestiny(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 px-4 text-white hover:bg-white hover:bg-opacity-10 transition-colors"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}