const Score = ({ gameState }) => {
  const { score, highScore, phase } = gameState || {};

  return (
    <div className="score grid grid-cols-3 ">
      <div className="score flex flex-col">
        <div className="label font-bold text-xs">YOUR SCORE</div>
        <div className="value">{score}</div>
      </div>
      <div className="phase flex flex-col items-center">
        <div className="label font-bold text-xs">PHASE</div>
        <div className="value">{phase}</div>
      </div>
      <div className="high-score flex flex-col items-end">
        <div className="label font-bold text-xs">HIGH SCORE</div>
        <div className="value">{highScore}</div>
      </div>
    </div>
  );
};

export default Score;
