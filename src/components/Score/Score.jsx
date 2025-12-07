import { motion } from "motion/react";
import ScoreLabel from "../ScoreLabel/ScoreLabel";
import PropTypes from "prop-types";

const Score = ({ gameState }) => {
  const { score, highScore, phase } = gameState || {};

  // Create score info array to avoid redundancy
  const scoreInfo = [
    { label: "YOUR SCORE", value: score, alignment: "items-start" },
    { label: "PHASE", value: phase, alignment: "items-center" },
    { label: "HIGH SCORE", value: highScore, alignment: "items-end" },
  ];

  return (
    <motion.div
      layout
      className="score grid grid-cols-3"
      transition={{ layout: { duration: 0.25, ease: "easeInOut" } }}
    >
      {scoreInfo.map((info, index) => {
        const { label, value, alignment } = info;

        return (
          <ScoreLabel
            key={index}
            index={index}
            label={label}
            value={value}
            alignment={alignment}
          />
        );
      })}
    </motion.div>
  );
};

Score.propTypes = {
  gameState: PropTypes.shape({
    score: PropTypes.number.isRequired,
    highScore: PropTypes.number.isRequired,
    phase: PropTypes.number.isRequired,
  }).isRequired,
};

export default Score;
