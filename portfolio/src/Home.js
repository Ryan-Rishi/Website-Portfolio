// Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import portfolioImage from './Assets/portfolio.jpeg';
import NavBar from './NavBar';

export default function Home() {
  return (
    <div className="home-container">
      <div className='NavBar'>
         <NavBar />
      </div>
      <motion.img
        src={portfolioImage}
        alt="Ryan Rishi Profile Picture"
        className='profile-picture'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
        }}
      />
      <motion.div
        className="bio"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h1 className='HiStatement'>Hi, I'm Ryan Rishi! <br></br> Welcome to my personal portfolio!</h1>
        <p className='PassionStatement'>Passionate <br></br> to craft innovative <br></br> technology. </p>
      </motion.div>
    </div>
  );
}