import { motion } from "motion/react";

// TODO: Find a way to correctly delay a card without affecting the rest of animations delays
const Card = ({ url, onClick, animationDelay = 0 }) => {
  return (
    <motion.div
      className="
        card
        flex items-center justify-center
        w-20 h-28
        text-white
        bg-black border-4 border-solid border-white rounded-lg
        cursor-pointer select-none
      "
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.15 }}
    >
      <img src={url} />
    </motion.div>
  );
};

export default Card;
