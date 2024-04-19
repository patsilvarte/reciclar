import { FC } from "react";
import Confetti from "react-confetti";
import Button from "./Button";

interface NextLevelProps {
  next: () => void;
}

const NextLevel: FC<NextLevelProps> = ({ next }) => {
  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <Button onClick={next}>Próximo nível</Button>
    </>
  );
};

export default NextLevel;
