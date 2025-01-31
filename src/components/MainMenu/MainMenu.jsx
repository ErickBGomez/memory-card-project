const MainMenu = ({ onGameStarted }) => {
  const handleStartGame = () => {
    onGameStarted(true);
  };

  return (
    <div className="main-menu">
      <h1 className="text-4xl font-bold text-center text-white">
        Memory Card Game
      </h1>
      <div className="flex flex-col justify-center gap-4 mt-4">
        <button className="primary" onClick={handleStartGame}>
          EASY
        </button>
        <button className="primary" onClick={handleStartGame}>
          MEDIUM
        </button>
        <button className="primary" onClick={handleStartGame}>
          HARD
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
