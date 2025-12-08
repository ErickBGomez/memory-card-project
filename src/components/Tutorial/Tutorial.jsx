import { AnimatePresence, motion } from "motion/react";
import { forwardRef, useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import useGameCards from "../../hooks/useGameCards";
import GameSettingsContext from "../../contexts/GameSettingsContext";
import FloatingTextContext from "../../contexts/FloatingTextContext";

const StepOne = () => {
  return (
    <>
      <p>Cards will appear in your board</p>
      <p>Like these:</p>
    </>
  );
};

const StepTwo = () => {
  return (
    <>
      <p>You can select one card at the time</p>
      <p>Come on, click one!</p>
    </>
  );
};

const StepThree = () => {
  return (
    <>
      <p>But the next one MUST NOT BE selected before</p>
      <p>Do you remember which one you selected?</p>
    </>
  );
};

const StepFour = () => {
  return (
    <>
      <p>To win, you must click all cards without repeating any</p>
      <p>Click the last one!</p>
    </>
  );
};

const Steps = {
  1: <StepOne />,
  2: <StepTwo />,
  3: <StepThree />,
  4: <StepFour />,
};

const Tutorial = forwardRef((props, ref) => {
  const [step, setStep] = useState(1);
  const [currentStepCompleted, setCurrentStepCompleted] = useState(true);
  const [cardsFlipped, setCardsFlipped] = useState(false);
  const { setShowTutorial } = useContext(GameSettingsContext);
  const cards = useGameCards(3, 1000);
  const { createFloatingText } = useContext(FloatingTextContext);

  useEffect(() => {
    if (step <= 2) return;

    setCardsFlipped(true);
    setTimeout(() => setCardsFlipped(false), 500);
    setTimeout(() => cards.sort(() => Math.random() - 0.5), 75);
  }, [step, cards]);

  const handleNextStep = () => {
    if (step >= 4) return;
    setStep(step + 1);
    setCurrentStepCompleted(false);
  };

  const handleCardClick = (clickEvent, card) => {
    if (currentStepCompleted) return;

    if (step === 2) {
      card.clicked = true;
      setCurrentStepCompleted(true);
      createFloatingText(clickEvent, "✅");
    }

    if (step === 3 || step === 4) {
      if (cards.find((c) => c._id === card._id).clicked) {
        createFloatingText(clickEvent, "❌");
        return;
      }

      card.clicked = true;
      setCurrentStepCompleted(true);
      createFloatingText(clickEvent, "✅");
    }
  };

  return (
    <motion.div
      className="max-w-[400px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      ref={ref}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.75 }}
      >
        <p className="text-center mt-6 mb-6">HOW TO PLAY</p>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="w-full flex flex-col items-center text-[#e2e2e2] text-center text-sm"
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {Steps[step]}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.25 }}
        className="w-full min-h-[112px] flex justify-center items-center gap-2 my-6"
      >
        {cards.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            url={card.url}
            onClick={(clickEvent) => handleCardClick(clickEvent, card)}
            flipped={cardsFlipped}
          />
        ))}
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex flex-col gap-2"
      >
        {step < 4 && (
          <>
            <button
              className="primary"
              onClick={handleNextStep}
              disabled={!currentStepCompleted}
            >
              NEXT STEP
            </button>
            <button
              className="secondary"
              onClick={() => setShowTutorial(false)}
            >
              SKIP TUTORIAL
            </button>
          </>
        )}
        {step == 4 && (
          <button
            className="primary"
            onClick={() => setShowTutorial(false)}
            disabled={!currentStepCompleted}
          >
            FINISH TUTORIAL
          </button>
        )}
      </motion.div>
    </motion.div>
  );
});

Tutorial.displayName = "Tutorial";

export default Tutorial;
