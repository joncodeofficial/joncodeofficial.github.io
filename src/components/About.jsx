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

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p>
          ¡Hola! Soy un desarrollador de software con experiencia en frontend y
          backend. Mi especialidad se encuentra en el frontend, donde he
          trabajado con tecnologías como JavaScript y TypeScript, tanto de forma
          nativa como con librerías y frameworks como React.js, Next.js y
          Angular.js.
        </p>
        <p className='mt-4'>
          En el backend, tengo experiencia en Node.js y Express, así como en
          Golang con Fiber y Gin. Cuando me enfrento a un desafío de desarrollo,
          me gusta pensar en mí mismo como un artesano que crea piezas bien
          pensadas y de alta calidad, con el objetivo de que perduren en el
          tiempo.
        </p>
        <p className='mt-4'>
          Creo firmemente en el trabajo colaborativo y en la comunicación
          asertiva como elementos clave para lograr grandes cosas. Me encantaría
          tener la oportunidad de colaborar contigo y hacer realidad ideas que
          mejoren procesos y, quién sabe, incluso cambien vidas.
        </p>
        <p className='mt-4'>
          Si estás interesado en trabajar juntos, ¡no dudes en contactarme!
          Estoy emocionado por la posibilidad de hacer realidad proyectos
          innovadores y generar un impacto positivo.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, 'about');
