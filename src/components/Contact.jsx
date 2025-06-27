import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <motion.div 
            className="contact-header"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </motion.svg>
            <h2>Contactez-nous</h2>
          </motion.div>
          
          <motion.p 
            className="contact-description"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Une question ? Une idée ? Envie de soutenir le projet ? 
            N'hésitez pas à nous écrire, on répond toujours !
          </motion.p>

          {!showSuccess ? (
            <motion.form 
              className="contact-form" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="form-row">
                <motion.div 
                  className="form-group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="name">Votre nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="Comment vous appelez-vous ?" 
                  />
                </motion.div>
                <motion.div 
                  className="form-group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="email">Votre email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="votre@email.com" 
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="message">Votre message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="6" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  placeholder="Racontez-nous tout ! Vos idées, vos questions, vos encouragements..."
                ></textarea>
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="btn btn-primary btn-full"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer le message
              </motion.button>
            </motion.form>
          ) : (
            <motion.div 
              className="contact-success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-content">
                <motion.svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </motion.svg>
                <h3>Merci !</h3>
                <p>Votre message nous fait chaud au cœur. Nous reviendrons vers vous très vite !</p>
              </div>
            </motion.div>
          )}

          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>
              Vous pouvez aussi nous écrire directement à 
              <a href="mailto:contact@colossus.fr">contact@colossus.fr</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact