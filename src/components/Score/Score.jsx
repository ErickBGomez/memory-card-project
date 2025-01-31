const Score = ({ gameState }) => {
  const { score, highScore, phase } = gameState || {};

  // Create score info array to avoid redundancy
  const scoreInfo = [
    { label: "YOUR SCORE", value: score, alignment: "items-start" },
    { label: "PHASE", value: phase, alignment: "items-center" },
    { label: "HIGH SCORE", value: highScore, alignment: "items-end" },
  ];

  return (
    <div className="score grid grid-cols-3 mb-4">
      {scoreInfo.map((info, index) => {
        const { label, value, alignment } = info;

        return (
          <div className={`flex flex-col ${alignment}`} key={index}>
            <div className="label font-bold text-xs">{label}</div>
            <div className="value">{value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Score;
