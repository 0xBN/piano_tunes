import { motion } from 'framer-motion';

const HowToUse = ({ setIsMenuOpen }) => {
  return (
    <motion.aside
      key='box'
      exit={'hidden'}
      className={`absolute top-0 z-20 h-full w-full bg-black `}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
      }}
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2  bg-black z-30 p-8 w-full md:w-auto`}
      >
        <h2 className={`text-center text-3xl`}>Tips</h2>
        <ul className={`p-3`}>
          <li className={`mt-4`}>Works best on ⌨️ keyboard</li>
          <li className={`mt-4`}>Press the corresponding letters</li>
          <li className={`mt-4`}>Capitalization matters</li>
          <li className={`mt-4`}>
            Notes are all there, but the rhythm is to be determined by the user
          </li>
        </ul>
        <div className={`text-center p-8`}>
          created by{' '}
          <a className={`text-red-500`} href='https://0xbn.github.io/'>
            Brian
          </a>
        </div>
      </div>
      <button
        className={`absolute rounded-full right-0 m-5 p-1 bg-black `}
        onClick={() => setIsMenuOpen(false)}
      >
        ❌
      </button>
    </motion.aside>
  );
};
export default HowToUse;
