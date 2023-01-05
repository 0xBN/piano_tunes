const PianoKeys = ({ allowedNotes, handleClick, note }) => {
  const activeStyle = 'bg-red-500 text text-yellow-500';
  const content = allowedNotes.map((pianoKey) => (
    <button
      key={pianoKey}
      onClick={handleClick}
      className={`${
        note === pianoKey ? activeStyle : 'bg-white text-black'
      } rounded border border-gray-600 px-4 py-8 font-playfair font-bold outline-none md:border-4 md:px-8 md:py-16`}
    >
      {pianoKey}
    </button>
  ));
  return content;
};
export default PianoKeys;
