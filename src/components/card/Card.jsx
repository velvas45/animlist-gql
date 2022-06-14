import React from "react";

import { TheCard } from "./card.styles";

const Card = ({ children, glass, height }) => {
  return (
    <TheCard isGlass={glass} height={height}>
      {children}
    </TheCard>
  );
};

export default Card;
