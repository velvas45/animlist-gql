import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import { color } from "data/variable-color";

export const TheCard = styled.div`
  //   margin-bottom: 25px;
  height: ${({ height }) => (height ? height : "max-content")};
  min-height: 350px;
  background: ${(props) =>
    props.isGlass ? "rgba(255, 255, 255, 0.5)" : color.white_off};
  -webkit-backdrop-filter: ${(props) =>
    props.isGlass ? "blur(7.5px)" : "none"};
  backdrop-filter: ${(props) => (props.isGlass ? "blur(7.5px)" : "none")};

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 0.5rem 1.5rem;
  padding-bottom: 0px;

  @media screen and (max-width: 768px) {
    text-align: center;
    min-width: 350px;
  }
`;
