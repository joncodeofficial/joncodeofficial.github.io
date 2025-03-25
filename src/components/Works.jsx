import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { GITHUB_URI } from '../config';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_uri,
  domain,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 500,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[340px] w-full 
        h-full max-h-[472px] transition-transform flex flex-col justify-between'
      >
        <div
          className='relative w-full min-h-[200px]'
          onClick={() => window.open(domain, '_blank')}
        >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl cursor-pointer hover:mix-blend-exclusion'
          />
        </div>

        <div className='mt-5'>
          <div className='flex justify-between items-center'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <div
              onClick={() => window.open(GITHUB_URI + source_uri, '_blank')}
              className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer mr-2'
            >
              <img
                src={github}
                alt='source code'
                className='w-full h-auto object-contain aspect-square'
              />
            </div>
          </div>
          <p className='mt-2 text-secondary text-[14px] text-pretty'>
            {description}
          </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className='sm:px-16 px-6 sm:py-12 py-8'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          PRÁCTICAS Y PROYECTOS PERSONALES
        </p>
        <h2 className={`${styles.sectionHeadText} font-purple`}>Proyectos</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap justify-center gap-8'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, 'work');
