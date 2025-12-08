import { AnimatePresence, easeInOut, motion } from "motion/react";
import { useContext, useEffect, useState } from "react";
import SelectDifficulty from "../SelectDifficulty/SelectDifficulty";
import PropTypes from "prop-types";
import GameSettingsContext from "../../contexts/GameSettingsContext";
import Tutorial from "../Tutorial/Tutorial";

const MainMenu = ({ setDifficulty }) => {
  const [showContent, setShowContent] = useState(false);
  const { showTutorial } = useContext(GameSettingsContext);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
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
          transition={{
            duration: 1,
            delay: 0.5,
            layout: { duration: 0.5, ease: easeInOut },
          }}
        >
          <h1 className="text-5xl font-bold text-center text-white">
            MEMORY CARD
          </h1>
        </motion.div>
        {showContent &&
          (showTutorial ? (
            <Tutorial />
          ) : (
            <SelectDifficulty setDifficulty={setDifficulty} />
          ))}
      </AnimatePresence>
    </div>
  );
};

MainMenu.propTypes = {
  setDifficulty: PropTypes.func.isRequired,
};

export default MainMenu;
