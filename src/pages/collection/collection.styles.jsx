import styled from "@emotion/styled/macro";
import { color } from "data/variable-color";

export const ButtonAdd = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding-top: 4px;
  background: ${color.white};
  border: 1px solid #dedede;
  -webkit-box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
  font-size: 1.25rem;
  cursor: pointer;
  color: ${color.black_off};
`;

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 0 4rem;

  @media screen and (min-width: 768px) {
    padding: 6rem 0 2rem;
    width: 85%;
  }
`;

export const SectionTitle = styled.div`
  color: ${color.black_off};
  font-size: 1.5rem;
  font-weight: 700;
  padding-bottom: 0.1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0 0.5rem 1rem;
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

export const TemplateNoData = styled.div`
  //   text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img {
    height: 300px;
    width: 600px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  button {
    border-radius: 0.8rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    color: ${color.black_off};
    border: 1px solid ${color.main};
    background: ${color.white_off};

    &:hover {
      color: ${color.secondColor};
      background: ${color.fourColor};
      border-color: ${color.white_off};
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

export const FormTag = styled.form`
  position: relative;
`;
export const LabelTag = styled.label`
  position: absolute;
  left: 0.6rem;
  top: 0.5rem;
  padding: 0.5rem;
  color: ${color.main};
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
`;

export const InputTag = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 85%;
  height: 100%;
  border: 2px solid ${color.black_off};
  border-radius: 0.5rem;
  font-family: inherit;
  color: ${color.black_off};
  outline: none;
  padding: 1.4rem 1.25rem;
  background: none;

  &:hover {
    border-color: ${color.black};
  }

  &:focus {
    border-color: ${color.main};
  }

  &:focus ~ ${LabelTag}, &:not(:placeholder-shown)&:not(:focus) ~ ${LabelTag} {
    top: -1rem;
    font-size: 0.8rem;
    left: 0.5rem;
    background-color: ${color.white};
  }
`;

export const AlertDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: ${({ status }) =>
    status === "error" ? color.danger : color.success};
  color: ${color.white_second};
  padding: 0.75rem;
  border-radius: 12px;
  border: 1px solid ${color.main};
  margin-bottom: 1rem;

  p {
    font-size: 1.25rem;
    font-weight: 500;
  }

  svg {
    cursor: pointer;
  }
`;
