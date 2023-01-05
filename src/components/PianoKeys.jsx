const PianoKeys = ({ allowedNotes, handleClick, note }) => {
  const activeStyle = 'bg-red-500 font-normal text decoration-solid';
  const content = allowedNotes.map((pianoKey) => (
    <button
      key={pianoKey}
      onClick={handleClick}
      className={`${
        note === pianoKey ? activeStyle : 'bg-white text-black'
      } border md:border-4 px-4 py-8 md:px-8 md:py-16 font-bold font-playfair `}
    >
      {pianoKey}
    </button>
  ));
  return content;
};
export default PianoKeys;
