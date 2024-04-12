import { FC } from "react";

interface ChallangeCompletedProps {
  restart: () => void;
}

const ChallangeCompleted: FC<ChallangeCompletedProps> = ({ restart }) => {
  return (
    <>
      <p>Parabéns!</p>
      <p>Conseguiste colocar todo o lixo no seu sítio.</p>
      <button onClick={restart}>Recomeçar</button>
    </>
  );
};
export default ChallangeCompleted;
