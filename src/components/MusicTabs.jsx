import MusicTab from './MusicTab';
import { tunes } from '../shared/tunesData';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';

const MusicTabs = () => {
  const allTunes = tunes.map((tune) => {
    return <MusicTab key={nanoid()} title={tune.name} tabs={tune.tabs} />;
  });
  return (
    <motion.div
      className={`h-[45vh] md:h-[60vh] overflow-y-scroll overflow-x-hidden`}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {allTunes}
    </motion.div>
  );
};
export default MusicTabs;
