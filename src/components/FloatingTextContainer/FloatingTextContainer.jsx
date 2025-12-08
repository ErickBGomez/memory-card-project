import { useContext } from "react";
import FloatingTextContext from "../../contexts/FloatingTextContext";
import { motion, AnimatePresence } from "motion/react";
import PropTypes from "prop-types";

const FloatingTextContainer = ({ children }) => {
  const { floatingTexts } = useContext(FloatingTextContext);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <AnimatePresence>
        {floatingTexts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 1, y: 0, scale: 0.75 }}
            animate={{ opacity: 0, y: -50, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed pointer-events-none text-white font-bold z-[1000] text-xl"
            style={{ left: t.x, top: t.y }}
          >
            {t.label}
          </motion.div>
        ))}
      </AnimatePresence>
      {children}
    </div>
  );
};

FloatingTextContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FloatingTextContainer;
