import { motion } from "motion/react";

const GameOver = ({ restartGame, returnMainMenu }) => {
  const gameOverAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="game-over flex flex-col gap-2"
      variants={gameOverAnimationVariants}
      initial="hidden"
      animate="show"
    >
      <div className="text-white text-3xl text-center mt-4 mb-4">
        GAME OVER!
      </div>
      <button className="primary" onClick={restartGame}>
        PLAY AGAIN
      </button>
      <button className="secondary" onClick={returnMainMenu}>
        RETURN MAIN MENU
      </button>
    </motion.div>
  );
};

export default GameOver;
