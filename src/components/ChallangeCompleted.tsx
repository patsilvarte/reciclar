import { FC } from "react";
import Confetti from "react-confetti";
import { getStarConfettis } from "../confettisEffects";
import Button from "./Button";
interface ChallangeCompletedProps {
  restart: () => void;
}

const ChallangeCompleted: FC<ChallangeCompletedProps> = ({ restart }) => {
  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        drawShape={getStarConfettis}
      />
      <p>Parabéns!</p>
      <p>Conseguiste colocar todo o lixo no seu sítio.</p>
      <Button onClick={restart}>Recomeçar</Button>
    </>
  );
};
export default ChallangeCompleted;
