import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar.js';
import Dog from './Assets/dog.jpeg';
import Me from './Assets/professional.JPG';
import './About.css';

const About = () => {
    return (
        <motion.div
            className="about-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
        >
            <Navbar className="navbar" />
            <div className="content-container">
                <motion.div
                    className="image-container"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={Me} alt="Me" className="Me" />
                    <img src={Dog} alt="Thor" className="Dog" />
                </motion.div>
                <motion.div
                    className="text-container"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="title">About Me</h1>
                    <p className="description">Welcome to my portfolio! My name is Ryan Rishi and I am a Senior at Georgia Tech studying Computer Engineering.</p>
                    <p className="description">In my free time, you might find me exploring new technologies, sparring at the gym, or playing with my dog. I am constantly seeking opportunities to expand my knowledge and improve my skills.</p>
                    <p className="description">Feel free to browse through my projects and get in touch with me if you have any questions or collaboration opportunities. I am always excited to work on new and challenging projects!</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;