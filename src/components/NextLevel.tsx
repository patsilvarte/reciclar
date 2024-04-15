import { FC } from "react";
import Confetti from "react-confetti";

interface NextLevelProps {
  next: () => void;
}

// add animation of clapps
const NextLevel: FC<NextLevelProps> = ({ next }) => {
  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        // drawShape={getStarConfettis}
      />
      <button onClick={next}>Próximo nível</button>;
    </>
  );
};

export default NextLevel;
