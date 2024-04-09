import street from "../assets/street.jpg";
import beach from "../assets/beach.jpg";
import { Garbage, LocationsSet } from "../types";

import { FC } from "react";
import styled from "styled-components";

interface StreetProps {
  garbage: Garbage[];
  draggableLocation: LocationsSet;
  children: any;
}

const Background = styled.div`
  background-repeat: round;
  position: absolute;
  width: 100%;
`;

const Street: FC<StreetProps> = ({ garbage, draggableLocation, children }) => {
  return (
    <div className="flex justify-center w-screen relative">
      <Background
        style={{ backgroundImage: `url(${street})` }}
        className="bottom-0 h-1/3"
      />
      <Background
        style={{ backgroundImage: `url(${beach})` }}
        className="top-0  h-2/3"
      />
      {children}
    </div>
  );
};

export default Street;
