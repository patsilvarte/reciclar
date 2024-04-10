import { FC } from "react";
import skyBackground from "../assets/sky.jpg";

interface SkyProps {
  children: JSX.Element;
}

const Sky: FC<SkyProps> = ({ children }) => {
  return (
    <div
      className="flex justify-center w-screen h-full flex-col"
      style={{
        background: `url(${skyBackground})`,
        backgroundRepeat: "round",
      }}
    >
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Sky;
