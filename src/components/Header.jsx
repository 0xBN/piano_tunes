import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleClick = () => {
    console.log('clicked!');
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={`text-center py-4 fixed top-0 bg-red-800 w-full z-10`}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h1 className={`text-3xl md:text-5xl font-cinzel font-medium`}>
        Piano Tunes 🎹
      </h1>
      {!isMenuOpen && (
        <button
          className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full mx-4 bg-black h-6 w-6 `}
          onClick={handleClick}
        >
          ❓
        </button>
      )}
    </motion.header>
  );
};
export default Header;
