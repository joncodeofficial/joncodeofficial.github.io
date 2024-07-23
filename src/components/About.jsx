import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { Fragment } from 'react';

const About = () => {
  return (
    <section className='sm:px-16 px-6 sm:py-12 py-8'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>PRESENTACIÓN</p>
        <h2 className={` font-purple ${styles.sectionHeadText}`}>
          Descripción General
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]'
      >
        <p>
          Soy un apasionado desarrollador de software con un enfoque
          especializado en el frontend. Mi experiencia abarca tecnologías como
          <b className='text-[#eee] font-medium'> JavaScript</b> y
          <b className='text-[#eee] font-medium'> TypeScript</b>, Y he trabajado
          tanto de forma nativa como con librerías y frameworks como
          <b className='text-[#eee] font-medium'> React.js</b>,
          <b className='text-[#eee] font-medium'> Next.js</b>. Mi objetivo
          siempre es crear piezas de alta calidad y bien pensadas que perduren
          en el tiempo, lo cual me lleva a considerarme un artesano del
          desarrollo.
        </p>
        <p className='mt-4'>
          En el backend, también poseo sólidos conocimientos en
          <b className='text-[#eee] font-medium'> Node.js</b> y
          <b className='text-[#eee] font-medium'> Express.js</b>, así como en
          <b className='text-[#eee] font-medium'> Golang</b> con
          <b className='text-[#eee] font-medium'> Fiber</b> o
          <b className='text-[#eee] font-medium'> Mux</b>. Esta diversidad de
          habilidades me permite ser versátil y enfrentar una amplia gama de
          desafíos técnicos.
        </p>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(About, 'about');
