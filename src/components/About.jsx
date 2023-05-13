import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCCIÓN</p>
        <h2 className={` font-purple ${styles.sectionHeadText}`}>
          Descripción General
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Soy un experto desarrollador de software con experiencia en TypeScript y
        JavaScript y experiencia en marcos como React, Nextjs, Node.js y Go.
        Aprendo rápido y colaboro estrechamente con los clientes para crear
        soluciones eficientes, escalables y fáciles de usar que resuelvan
        problemas del mundo real. ¡Trabajemos juntos para hacer realidad tus
        ideas
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, 'about');
