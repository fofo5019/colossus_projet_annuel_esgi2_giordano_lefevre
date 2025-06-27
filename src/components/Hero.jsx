import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Colossus
              <motion.span 
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                La tablette 24 pouces pour tous
              </motion.span>
            </motion.h1>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Découvrez la grandeur d'une tablette adaptative qui rend le numérique accessible à chacun, 
              quels que soient ses besoins.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                className="btn btn-primary" 
                onClick={() => scrollToSection('our-story')}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir
              </motion.button>
              <motion.button 
                className="btn btn-outline" 
                onClick={() => scrollToSection('features')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                En savoir plus
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="hero-card"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 0,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <img src="/images/exemple.png" alt="Tablette Colossus 24 pouces" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.button 
        className="scroll-down" 
        onClick={() => scrollToSection('features')}
        aria-label="Défiler vers le bas"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </motion.button>
    </section>
  )
}

export default Hero