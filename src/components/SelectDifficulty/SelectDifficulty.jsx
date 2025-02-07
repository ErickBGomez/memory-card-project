import { motion } from "motion/react";

const SelectDifficulty = ({ setDifficulty }) => {
  const buttons = [
    {
      text: "EASY",
      difficulty: 0,
    },
    {
      text: "MEDIUM",
      difficulty: 1,
    },
    {
      text: "HARD",
      difficulty: 2,
    },
  ];

  const animatedButtons = buttons.map((button, index) => (
    <motion.button
      key={index}
      onClick={() => setDifficulty(button.difficulty)}
      className="primary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.25 + index * 0.15 }}
    >
      {button.text}
    </motion.button>
  ));

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-center mt-6 mb-6">SELECT A DIFFICULTY</p>
      </motion.div>
      <div className="flex flex-col justify-center gap-4">
        {animatedButtons}
      </div>
    </>
  );
};

export default SelectDifficulty;
