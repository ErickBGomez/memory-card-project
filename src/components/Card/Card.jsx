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
    hover: {
      y: -5,
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
    <motion.div
      ref={scope}
      className="
        card
        flex items-center justify-center
        w-20 h-28
        text-white
        bg-black border-4 border-solid border-white rounded-lg
        cursor-pointer select-none
        perspective-1000
      "
      onClick={onClick}
      key={id}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileHover="hover"
      whileTap="clicked"
    >
      <div className="inner relative w-full h-full transform-3d">
        <div className="front absolute w-full h-full backface-hidden">
          <div className="w-full h-full overflow-hidden bg-white">
            <img src={url} />
          </div>
        </div>
        <div className="back absolute w-full h-full [backface-visibility:hidden] rotate-y-180">
          <div className="w-full h-full bg-black" />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
