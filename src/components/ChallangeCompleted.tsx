import { FC } from "react";
import Confetti from "react-confetti";
import { getStarConfettis } from "../confettisEffects";
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
      <button onClick={restart}>Recomeçar</button>
    </>
  );
};
export default ChallangeCompleted;
