import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo } from '../assets';

import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileBtn = () => {
    const $hamburger = document.querySelector('.hamburger');
    const $navbar = document.querySelector('.navbar');
    $navbar.classList.toggle('active');
    $hamburger.classList.toggle('active');
    setToggle(!toggle);
  };

  return (
    <motion.div
      initial={{ opacity: '0' }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? 'bg-primary' : 'bg-transparent'
        }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt='logo' className='w-10 h-10 object-contain' />
            <p className='text-white hidden lg:flex text-[18px] font-bold cursor-pointer'>
              Jonathan &nbsp;
              <span className='sm:block hidden'> | Fullstack Dev</span>
            </p>
          </Link>

          {/* NAVBAR DESKTOP */}

          <ul className='list-none hidden sm:flex flex-row gap-8'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* NAVBAR MOBILE */}

          <div className='sm:hidden'>
            <div className=' navbar-container'>
              <nav className='navbar'>
                {navLinks.map((nav, i) => (
                  <a
                    key={nav.id}
                    href={`#${nav.id}`}
                    style={{ '--i': i }}
                    className='navbar-item'
                    onClick={handleMobileBtn}
                  >
                    <span>{nav.title}</span>
                  </a>
                ))}
              </nav>

              <div className='hamburger' onClick={handleMobileBtn}>
                <span className='hamburger-bar1'></span>
                <span className='hamburger-bar2'></span>
                <span className='hamburger-bar3'></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
