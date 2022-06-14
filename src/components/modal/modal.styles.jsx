import styled from "@emotion/styled/macro";
import { color } from "data/variable-color";

const padding = {
  padding: "10px",
};

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  z-index: 3;

  &.show {
    opacity: 1;
    pointer-events: visible;
  }
`;

export const ModalContent = styled.div`
  width: ${({ width }) => (width ? width : "500px")};
  background-color: #fff;
  border-radius: 10px;
  transform: translateY(-200px);
  transition: all 0.3s ease-in-out;
  position: relative;

  ${ModalContainer}.show & {
    transform: translateY(0);
  }
`;

export const ModalHeader = styled.div`
  ${padding};
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

export const ModalFooter = styled.div`
  ${padding};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn__close,
  .btn__add {
    min-width: 100px;
    padding: 0.4rem 1.6rem;
    border-radius: 10px;
    outline: none;
    border: 1px solid transparent;
    cursor: pointer;
  }

  .btn__add {
    background: ${color.primary};
    color: ${color.white_off};
  }

  .btn__close {
    background: ${color.danger};
    color: ${color.white_off};
  }
`;

export const ModalTitle = styled.h4`
  margin: 0;
`;

export const ModalBody = styled.div`
  ${padding};
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;
  min-height: 50px;
`;
