import { motion } from 'framer-motion';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleClick = () => {
    console.log('clicked!');
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 z-10 w-full bg-red-800 py-4 text-center`}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h1 className={`font-cinzel text-3xl font-medium md:text-5xl`}>
        Piano Tunes 🎹
      </h1>
      {!isMenuOpen && (
        <button
          className={`absolute right-0 top-1/2 mx-4 h-6 w-6 -translate-y-1/2 rounded-full bg-yellow-300 duration-500 hover:scale-125`}
          onClick={handleClick}
        >
          ❓
        </button>
      )}
    </motion.header>
  );
};
export default Header;
