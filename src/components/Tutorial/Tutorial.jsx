import { motion } from "motion/react";
import { useContext, useState } from "react";
import Card from "../Card/Card";
import useGameCards from "../../hooks/useGameCards";
import GameSettingsContext from "../../contexts/GameSettingsContext";

const StepOne = () => {
  return (
    <div>
      <p>Cards will appear in your board</p>
      <p>Like these:</p>
    </div>
  );
};

const StepTwo = () => {
  return (
    <div>
      <p>You can select one card at the time</p>
      <p>Come on, click one!</p>
    </div>
  );
};

const StepThree = () => {
  return (
    <div>
      <p>But next one MUST NOT BE selected before</p>
      <p>Do you remember which one you selected?</p>
    </div>
  );
};

const StepFour = () => {
  return (
    <div>
      <p>In order to win, you must click all cards without repeating any</p>
      <p>Click the last one!</p>
    </div>
  );
};

const Steps = {
  1: <StepOne />,
  2: <StepTwo />,
  3: <StepThree />,
  4: <StepFour />,
};

const Tutorial = () => {
  const [step, setStep] = useState(1);
  const [currentStepCompleted, setCurrentStepCompleted] = useState(true);
  const { setShowTutorial } = useContext(GameSettingsContext);
  const cards = useGameCards(3);
  const [clickedCards, setClickedCards] = useState([]);

  const handleNextStep = () => {
    if (step >= 4) return;
    setStep(step + 1);
    setCurrentStepCompleted(false);
  };

  const handleCardClick = (cardId) => {
    if (clickedCards.includes(cardId)) return;

    setClickedCards([...clickedCards, cardId]);

    if (step === 2) {
      currentStepCompleted(true);
    }
  };

  return (
    <div className="max-w-[400px]">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-center mt-6 mb-6">HOW TO PLAY</p>
      </motion.div>

      {/* Steps */}
      <div className="w-full flex flex-col items-center text-[#e2e2e2]">
        <div className="text-center">{Steps[step]}</div>
      </div>

      {/* Cards */}
      <div className="w-full flex justify-center items-center gap-2 my-6">
        {cards.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            url={card.url}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-2">
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
          <button className="primary" onClick={() => setShowTutorial(false)}>
            FINISH TUTORIAL
          </button>
        )}
      </div>
    </div>
  );
};

export default Tutorial;
