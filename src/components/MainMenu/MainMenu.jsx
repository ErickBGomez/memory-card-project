const MainMenu = ({ onGameStarted }) => {
  const handleStartGame = () => {
    onGameStarted(true);
  };

  return (
    <div className="main-menu">
      <h1 className="text-4xl font-bold text-center text-white">
        Memory Card Game
      </h1>
      <div className="flex justify-center gap-4">
        <button className="btn btn-primary" onClick={handleStartGame}>
          Easy
        </button>
        <button className="btn btn-primary" onClick={handleStartGame}>
          Medium
        </button>
        <button className="btn btn-primary" onClick={handleStartGame}>
          Hard
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
