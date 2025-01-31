const MainMenu = ({ setDifficulty }) => {
  const selectDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  };

  return (
    <div className="main-menu flex flex-col gap-6">
      <h1 className="text-5xl font-bold text-center text-white">MEMORY CARD</h1>
      <p className="text-center">SELECT A DIFFICULTY</p>
      <div className="flex flex-col justify-center gap-4">
        <button className="primary" onClick={() => selectDifficulty(0)}>
          EASY
        </button>
        <button className="primary" onClick={() => selectDifficulty(1)}>
          MEDIUM
        </button>
        <button className="primary" onClick={() => selectDifficulty(2)}>
          HARD
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
