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
            <a href='https://linkedin.com/in/jonpeña' target='_blank'>
              <img src='images/icon-linkedin.svg' alt='linkedin icon' />
            </a>

            <a href='https://github.com/jonpena' target='_blank'>
              <img src='images/icon-github.svg' alt='github icon' />
            </a>

            <a
              href='https://api.whatsapp.com/send?phone=04121953819&text=Hola%20Jonathan,%20Como%20Estas ?'
              target='_blank'
            >
              <img src='images/icon-whatsapp.svg' alt='whatsapp icon' />
            </a>

            <a
              href='https://www.youtube.com/channel/UCjxrf5SMrC0F66MuxvJ7ZWQ'
              target='_blank'
            >
              <img src='images/icon-youtube.svg' alt='youtube icon' />
            </a>
          </div>
          <span className='social-bar'></span>

          <p data-section='footer' data-value='footer-p'>
            Creado con <span>❤️</span> por Jonathan Peña
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
