import { FC } from "react";

interface NextLevelProps {
  next: () => void;
}

const NextLevel: FC<NextLevelProps> = ({ next }) => {
  return <button onClick={next}>Próximo nível</button>;
};

export default NextLevel;
