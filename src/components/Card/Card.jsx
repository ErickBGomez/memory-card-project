import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

const Card = ({ id, url, onClick }) => {
  const [scope, animate] = useAnimate();

  const cardVariants = {
    hidden: { opacity: 0, y: 20, rotateY: 180 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
    // Temporally disabled
    // hover: {
    //   y: -5,
    // },
    hover: {
      rotateY: 0,
    },
    clicked: {
      y: 0,
      transition: { duration: 0.025 },
    },
  };

  useEffect(() => {
    const waitAnimation = setTimeout(() => {
      animate(scope.current, { rotateY: 0 });
    }, 250);

    return () => clearTimeout(waitAnimation);
  }, [animate, scope]);

  return (
    <div key={id} className="card-container perspective-1000" onClick={onClick}>
      <motion.div
        ref={scope}
        className="
        card
        flex items-center justify-center
        w-20 h-28
        text-white
        bg-black border-4 border-solid border-white rounded-lg
        cursor-pointer select-none
        relative transform-style-preserve-3d
      "
        variants={cardVariants}
        initial="hidden"
        animate="show"
        whileHover="hover"
        whileTap="clicked"
      >
        <div className="front absolute w-full h-full backface-hidden">
          <img src={url} />
        </div>
        <div className="back absolute w-full h-full backface-hidden rotate-y-180">
          Backface
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
