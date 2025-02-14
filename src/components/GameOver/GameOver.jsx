import { motion } from "motion/react";
import Card from "../Card/Card";

const GameOver = ({ restartGame, returnMainMenu, lastCardClicked }) => {
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
      <div className="text-white text-3xl text-center mt-4 mb-4">GAME OVER</div>
      <div className="info mb-4 flex flex-col items-center">
        <div className="info mb-2">THIS CARD HAS ALREADY BEEN CLICKED</div>
        <Card id={lastCardClicked?._id} url={lastCardClicked?.url} small />
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
