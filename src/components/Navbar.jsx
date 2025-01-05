import React, { useEffect, useState } from 'react';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo } from '../assets';

import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // Condition to hide Navbar
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsNavVisible(isScrollingUp);
      prevScrollPos = currentScrollPos;
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
        } w-full flex items-center fixed top-0 z-20 ${
          scrolled ? 'bg-[#05081685] backdrop-blur-md' : 'bg-transparent'
        } ${
          isNavVisible ? 'sm:translate-y-0' : 'sm:-translate-y-20'
        } transition-all duration-300`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <a
            href='/'
            className='flex items-center gap-2 group'
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt='logo'
              className='group-hover:rotate-[360deg] transition-transform duration-500 w-10 h-10 object-contain'
            />
            <p className='text-white hidden lg:flex text-[18px] font-bold cursor-pointer'>
              Jonathan &nbsp;
              <span className='sm:block hidden'> | Fullstack Dev</span>
            </p>
          </a>

          {/* NAVBAR DESKTOP */}

          <ul className='list-none hidden sm:flex py-5 flex-row gap-8'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* NAVBAR MOBILE */}

          <div className='sm:hidden'>
            <div className=' navbar-container'>
              <div className='navbar'>
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
              </div>

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
