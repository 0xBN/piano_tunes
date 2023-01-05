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
        className={`absolute top-1/2 right-1/2 z-30 w-full  -translate-y-1/2 translate-x-1/2 bg-black p-8 md:w-auto`}
      >
        <h2 className={`text-center text-3xl`}>Levels</h2>
        <ul className={`mx-auto w-1/2 p-3`}>
          <li className={`rounded-md bg-green-900 text-center font-bold`}>
            Easy
          </li>
          <li className={`rounded-md bg-yellow-600 text-center font-bold`}>
            Medium
          </li>
          <li className={`rounded-md bg-red-900 text-center font-bold`}>
            Hard
          </li>
        </ul>
        <hr className={`m-4 mx-auto`} />
        <h2 className={`text-center text-3xl`}>Tips</h2>
        <ul className={`p-3`}>
          <li className={`mt-4`}>⌨️ Use keyboard for best results</li>
          <li className={`mt-4`}>🔊 Turn volume max for mobile devices </li>
          <li className={`mt-4`}>Press the corresponding letters</li>
          <li className={`mt-4`}>Capitalization matters</li>
          <li className={`mt-4`}>
            Notes are all there, but the rhythm is to be determined by the user
          </li>
        </ul>
        <div className={`p-8 text-center`}>
          created by{' '}
          <a className={`text-red-500`} href='https://0xbn.github.io/'>
            Brian
          </a>
        </div>
      </div>
      <button
        className={`absolute right-0 m-5 rounded-full bg-black p-1 `}
        onClick={() => setIsMenuOpen(false)}
      >
        ❌
      </button>
    </motion.aside>
  );
};
export default HowToUse;
