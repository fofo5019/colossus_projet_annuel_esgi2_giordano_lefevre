import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="nav">
        <motion.div 
          className="nav-brand" 
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/colossus-icon.svg" alt="Logo Colossus" className="nav-logo" />
          <span className="nav-title">Colossus</span>
        </motion.div>
        
        <button 
          className="nav-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu mobile"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <motion.ul 
          className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
          initial={false}
          animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        >
          {['hero', 'features', 'accessibility', 'os', 'our-story', 'contact'].map((section, index) => (
            <motion.li 
              key={section}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={`#${section}`} 
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section)
                }}
              >
                {section === 'hero' ? 'Accueil' :
                 section === 'features' ? 'Caractéristiques' :
                 section === 'accessibility' ? 'Accessibilité' :
                 section === 'os' ? 'L\'OS' :
                 section === 'our-story' ? 'Notre Histoire' : 'Contact'}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  )
}

export default Header