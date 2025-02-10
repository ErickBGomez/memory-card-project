import { motion } from "motion/react";

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
      transition={{ delay: animationDelay, duration: 0.25 }}
    >
      <img src={url} />
    </motion.div>
  );
};

export default Card;
