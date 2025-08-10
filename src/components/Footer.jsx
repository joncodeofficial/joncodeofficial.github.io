import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: '0' }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      <footer id='footer'>
        <div className='footer-container'>
          <div className='social-container'>
            <a href='https://linkedin.com/in/joncode' target='_blank'>
              <img src='images/icon-linkedin.svg' alt='linkedin icon' />
            </a>

            <a href='https://github.com/joncodeofficial' target='_blank'>
              <img src='images/icon-github.svg' alt='github icon' />
            </a>

            <a
              href='https://api.whatsapp.com/send?phone=+34614374632&text=Hi%20Jonathan'
              target='_blank'
            >
              <img src='images/icon-whatsapp.svg' alt='whatsapp icon' />
            </a>

            <a href='https://www.youtube.com/@joncodeofficial' target='_blank'>
              <img src='images/icon-youtube.svg' alt='youtube icon' />
            </a>
          </div>
          <span className='social-bar'></span>

          <p data-section='footer' data-value='footer-p'>
            Creado con{' '}
            <span>
              <img
                src='https://icons.iconarchive.com/icons/designbolts/free-valentine-heart/32/Heart-icon.png'
                width='12'
                height='12'
              />
            </span>
            usando React.js
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
