import { AnimatePresence, motion } from "motion/react";
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
      <AnimatePresence mode="popLayout">
        <motion.div
          key="title"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, layout: { duration: 0.5 } }}
        >
          <h1 className="text-5xl font-bold text-center text-white">
            MEMORY CARD
          </h1>
        </motion.div>
        {showDifficulty && (
          <SelectDifficulty
            key="difficulty"
            layout
            setDifficulty={setDifficulty}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainMenu;
