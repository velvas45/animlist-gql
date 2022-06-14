import styled from "@emotion/styled";
import { color } from "data/variable-color";

export const CollectionListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding: 2rem 1rem;
  border-top: 1px solid ${color.black_off};
  border-bottom: ${({ lastItem }) =>
    lastItem ? "1px solid" + color.black_off : "none"};

  .collection__title {
    width: "max-content";
    position: relative;
    .collection__badge-title {
      width: 18px;
      height: 18px;
      display: block;
      text-align: center;
      position: absolute;
      top: -10px;
      right: -18px;
      background: ${color.primary};
      color: ${color.white};
      border: 1px solid ${color.secondary};
      border-radius: 50%;
      line-height: 18px;
    }
    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    background: ${color.fourColor};
  }

  .button__cta {
    display: flex;
    column-gap: 1rem;
    cursor: pointer;

    .button__cta-edit {
      color: green;
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
    .button__cta-remove {
      color: red;
      transition: all 0.2s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
