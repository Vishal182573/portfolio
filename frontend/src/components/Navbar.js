import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.findIndex(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection !== -1) {
        setActiveItem(navItems[currentSection].name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDestiny = (id) => {
    const destination = document.getElementById(id);
    if (destination) {
      destination.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
    setActiveItem(id);
  };

  const navItems = [
    { name: "Home", id: "Home" },
    { name: "Past Journey", id: "Past-Experience" },
    { name: "Skills Set", id: "Skills-Set" },
    { name: "Projects", id: "Projects" },
    { name: "Contact Me", id: "Contact-Me" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        staggerChildren: 0.1,
      }
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 p-6 transition-all duration-300 ${
        (scrolled || isOpen) ? "bg-black bg-opacity-80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a
          href="/"
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.a>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollDestiny(item.id)}
              className={`text-white transition-colors ${
                activeItem === item.name ? "text-purple-400 font-bold" : "hover:text-purple-300"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-4 bg-black bg-opacity-90 rounded-lg overflow-hidden"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollDestiny(item.id)}
                className={`block w-full text-left py-3 px-4 text-white transition-colors ${
                  activeItem === item.name ? "bg-purple-600" : "hover:bg-white hover:bg-opacity-10"
                }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
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