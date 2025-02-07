import { motion } from "motion/react";

const MainMenu = ({ setDifficulty }) => {
  const selectDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  };

  return (
    <div className="main-menu">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-center text-white">
          MEMORY CARD
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-center mt-6 mb-6">SELECT A DIFFICULTY</p>
      </motion.div>
      <motion.div
        className="flex flex-col justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.button
          className="primary"
          onClick={() => selectDifficulty(0)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          EASY
        </motion.button>
        <motion.button
          className="primary"
          onClick={() => selectDifficulty(1)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          MEDIUM
        </motion.button>
        <motion.button
          className="primary"
          onClick={() => selectDifficulty(2)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          HARD
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MainMenu;
