import { motion } from "motion/react";

const Card = ({ id, url, onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
    hover: {
      y: -5,
    },
    clicked: {
      y: 0,
      transition: { duration: 0.025 },
    },
  };

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
      key={id}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileHover="hover"
      whileTap="clicked"
    >
      <img src={url} />
    </motion.div>
  );
};

export default Card;
