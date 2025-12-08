import { useContext } from "react";
import Game from "./components/Game/Game";
import MainMenu from "./components/MainMenu/MainMenu";
import GameSettingsContext from "./contexts/GameSettingsContext";
import Particles from "./components/Particles/Particles";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { difficulty, setDifficulty } = useContext(GameSettingsContext);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Background */}
      <Particles
        particleCount={150}
        particleSpread={15}
        moveParticlesOnHover={false}
      />
      <div className="inset-0 absolute w-screen h-screen flex flex-col items-center justify-center">
        {difficulty >= 0 ? (
          <Game difficulty={difficulty} returnMenu={setDifficulty} />
        ) : (
          <MainMenu setDifficulty={setDifficulty} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
