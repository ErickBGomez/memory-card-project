const MainMenu = ({ setDifficulty }) => {
  const selectDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  };

  return (
    <div className="main-menu">
      <h1 className="text-4xl font-bold text-center text-white">
        Memory Card Game
      </h1>
      <div className="flex flex-col justify-center gap-4 mt-4">
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
