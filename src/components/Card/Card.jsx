import { motion } from "motion/react";

const Card = ({ url, onClick }) => {
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
      whileTap={{ y: 0, transition: { duration: 0.025 } }}
      transition={{ duration: 0.15 }}
    >
      <img src={url} />
    </motion.div>
  );
};

export default Card;
