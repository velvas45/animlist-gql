import styled from "@emotion/styled/macro";

import { color } from "data/variable-color";

// export const BackgroundImage = styled.div`
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
//   background-image: ${({ imageUrl }) => `url(${imageUrl})`};
// `;

export const ButtonRemove = styled.div`
  padding: 0.3rem 0.8rem;
  background: ${color.danger};
  color: ${color.white_off};
  border-radius: 4px;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  column-gap: 6px;

  &:hover {
    background: red;
    cursor: pointer;
  }
`;

export const ContentText = styled.div`
  height: 90px;
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: ${color.main};
  opacity: 0;
  position: absolute;
  bottom: 0;
  transition: all 0.5s ease-in-out;

  h2 {
    font-weight: 700;
    margin: 0 6px 4px;
    font-size: 1rem;
    color: ${color.white_off};
    text-transform: uppercase;
  }
`;

export const ContainerLove = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.8rem;
  padding: 0.2rem 0.4rem 0.05rem;
  height: max-content;
  background: ${color.main};
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(242, 242, 242, 0.25);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  svg {
    fill: ${color.white};
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    background: ${color.fourColor};

    svg {
      transform: scale(1.1);
    }
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 350px;
  position: relative;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f1f1f1;
  margin: 0 7.5px 15px;
  overflow: hidden;
  border-radius: 1rem;

  &:first-of-type {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    ${ContentText} {
      opacity: 0.8;
      cursor: default;
    }

    ${ContainerLove} {
      opacity: 0.8;
    }
  }
`;

export const ContextDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  gap: 1.25rem;
  color: ${color.fourColor};
  font-weight: 400;
  margin-bottom: 0.5rem;
`;
