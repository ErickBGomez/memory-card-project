const Score = ({ gameState }) => {
  const { score, highScore, phase } = gameState || {};

  return (
    <div className="score">
      <div className="score">Score: {score}</div>
      <div className="high-score">High Score: {highScore}</div>
      <div className="phase">Phase: {phase}</div>
    </div>
  );
};

export default Score;
