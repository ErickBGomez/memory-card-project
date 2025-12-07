import { motion } from "motion/react";
import { forwardRef } from "react";
import PropTypes from "prop-types";

// forwardRef is used because of Framer motion
const SelectDifficulty = forwardRef(({ setDifficulty }, ref) => {
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
      transition={{
        duration: 0.25,
        delay: 1 + index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {button.text}
    </motion.button>
  ));

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        ref={ref}
      >
        <p className="text-center mt-6 mb-6">SELECT A DIFFICULTY</p>
      </motion.div>
      <div className="flex flex-col justify-center gap-4">
        {animatedButtons}
      </div>
    </>
  );
});

SelectDifficulty.displayName = "SelectDifficulty";

SelectDifficulty.propTypes = {
  setDifficulty: PropTypes.func.isRequired,
};

export default SelectDifficulty;
