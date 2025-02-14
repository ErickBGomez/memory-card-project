import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

const ScoreLabel = ({ index, label, value, alignment }) => {
  const [scope, animate] = useAnimate();

  // TODO: Find another way to animate the pulse
  useEffect(() => {
    animate(scope.current, { opacity: [0, 1, 0] });
  }, [animate, scope, value]);

  return (
    <motion.div
      className={`flex flex-col ${alignment}`}
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.15 }}
    >
      <div className="label font-bold text-xs">{label}</div>
      <div className="value relative">
        {value}
        <motion.div
          ref={scope}
          className="pulse absolute top-0 left-[-80%] bg-white w-6 h-6 rounded-full"
          initial={{ opacity: 0 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default ScoreLabel;
