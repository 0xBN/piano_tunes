const MusicTab = ({ title, tabs, level }) => {
  let levelColor =
    level === 'easy'
      ? 'bg-green-900'
      : level === 'medium'
      ? 'bg-yellow-600'
      : 'bg-red-900';
  return (
    <div>
      <div className={`sticky top-0 ${levelColor} text-center text-xl`}>
        {title}
      </div>
      <div className={`px-4 py-8 text-center text-4xl`}>{tabs}</div>
    </div>
  );
};
export default MusicTab;
