// NavigationMenu.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Navigation.css';

const backdropVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
};

const linkVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 }
};

const NavigationMenu = ({ isOpen, toggle }) => {
  const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' }
  ];

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={backdropVariants}
      transition={{ type: 'tween' }}
      className="menu-backdrop"
    >
      <motion.nav
        initial={{ y: "-100%" }}
        animate={isOpen ? { y: 0 } : { y: "-100%" }}
        transition={{ type: 'spring', stiffness: 30, damping: 13 }}
        className="menu-container"
      >
        <button className='close-button' onClick={toggle}>
          Close
        </button>
        {/* Navigation Links */}
        {menuLinks.map((link, index) => (
          <motion.div
            key={link.name}
            variants={linkVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            transition={{
              duration: 0.8,
              delay: isOpen ? 0.7 + index * 0.2 : 0,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <Link to={link.path} onClick={toggle}>{link.name}</Link>
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
};

export default NavigationMenu;
