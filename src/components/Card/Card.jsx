import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";

const Card = ({ id, url, onClick, flipped }) => {
  const [scope, animate] = useAnimate();
  const [mountCooldown, setMountCooldown] = useState(true);

  const cardVariants = {
    hidden: { opacity: 0, y: 20, rotateY: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
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
      animate(scope.current, { rotateY: 180 });
      setMountCooldown(false);
    }, 450);

    return () => clearTimeout(waitAnimation);
  }, [animate, scope]);

  useEffect(() => {
    if (mountCooldown) return;

    animate(scope.current, { rotateY: flipped ? 0 : 180 });
  }, [animate, flipped, scope, mountCooldown]);

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
        exit="exit"
        whileHover="hover"
        whileTap="clicked"
      >
        <div className="back absolute w-full h-full backface-hidden">
          Backface
        </div>
        <div className="front absolute w-full h-full backface-hidden rotate-y-180">
          <img src={url} />
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
