import { useEffect, useState } from 'react';
import PianoKeys from './PianoKeys';
import { motion } from 'framer-motion';
import {
  isCapital,
  numToLetter,
  letterToNum,
  allowedNotes,
} from '../utils/helperFunctions';

const Keyboard = () => {
  const [note, setNote] = useState('none');

  const setAndPlay = (letter) => {
    if (!allowedNotes.includes(letter)) return;
    setNote(letter);
    playSound(letter);
  };

  const handleClick = (e) => setAndPlay(e.target.textContent);

  // HANDLE BUTTON PRESS
  useEffect(() => {
    const getKeyPressed = (e) => setAndPlay(numToLetter(e.keyCode));
    document.addEventListener('keypress', getKeyPressed);
    return () => document.removeEventListener('keypress', getKeyPressed);
  });

  const playSound = (note) => {
    // if (!allowedNotes.includes(note)) return;

    const convertToFileName = isCapital(letterToNum(note))
      ? note.toLowerCase() + 'High'
      : note;
    const noteAudio = new Audio(
      require(`../shared/pianoNotes/${convertToFileName}.mp3`)
    );

    if (!noteAudio.paused) {
      noteAudio.pause();
      noteAudio.currentTime = 0;
    }
    noteAudio.play();
  };

  return (
    <motion.div
      className={``}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.5, once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h1
        className={`text-3xl md:text-4xl text-center font-playfair justify-center flex gap-4 py-4`}
      >
        <div>Key: </div>
        <div className={`text-red-500 font-bold`}>{note}</div>
      </h1>
      <div className={`flex flex-wrap justify-center`}>
        <PianoKeys
          allowedNotes={allowedNotes}
          handleClick={handleClick}
          note={note}
        />
      </div>
    </motion.div>
  );
};
export default Keyboard;
