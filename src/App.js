import Keyboard from './components/Keyboard';
import MusicTabs from './components/MusicTabs';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import HowToUse from './components/HowToUse';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-black text-white '>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className={`mt-[70px] md:mt-[80px] `}>
        <MusicTabs />
        <Keyboard />
      </main>
      <AnimatePresence>
        {isMenuOpen && <HowToUse setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
      {/* <footer>&copy;</footer> */}
    </div>
  );
}

export default App;
