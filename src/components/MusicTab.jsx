const MusicTab = ({ title, tabs }) => {
  return (
    <div>
      <div className={`sticky top-0 bg-red-900 text-xl text-center`}>
        {title}
      </div>
      <div className={`text-center text-4xl px-4 py-8`}>{tabs}</div>
    </div>
  );
};
export default MusicTab;
