import { motion, AnimatePresence } from "motion/react";
import { useContext } from "react";
import FloatingTextContext from "../../contexts/FloatingTextContext";

const FloatingText = () => {
  const { floatingTexts } = useContext(FloatingTextContext);

  return (
    <AnimatePresence>
      {floatingTexts.map((t) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -50 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed pointer-events-none text-white font-bold"
          style={{ left: t.x, top: t.y }}
        >
          {t.label}
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default FloatingText;
