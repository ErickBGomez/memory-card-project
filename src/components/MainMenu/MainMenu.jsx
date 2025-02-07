import { motion } from "motion/react";
import { useEffect, useState } from "react";
import SelectDifficulty from "../SelectDifficulty/SelectDifficulty";

const MainMenu = ({ setDifficulty }) => {
  const [showDifficulty, setShowDifficulty] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowDifficulty(true);
    }, 2000);
  }, []);

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
      {showDifficulty && <SelectDifficulty setDifficulty={setDifficulty} />}
    </div>
  );
};

export default MainMenu;
