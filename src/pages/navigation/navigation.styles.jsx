import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { color } from "data/variable-color";

export const NavigationContainer = styled.header`
  width: 100%;
  background: ${color.white};
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  border-top: 1px solid ${color.black_off};
  @media screen and (min-width: 768px) {
    border-top: none;
    top: 0;
    bottom: initial;
    padding: 0;
    background: ${color.white_off};
  }
`;

export const NavWrapper = styled.nav`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    width: 85%;
    height: 4rem;
  }
`;

export const LogoContainer = styled(Link)`
  width: 70px;
  color: ${color.main}
  font-style: italic;
  font-size: 1.75rem;
  font-weight: 700;
  font-family: "Poppins", serif;
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 0.75rem;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const OpenIcon = styled.div`
  color: ${color.black};
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: ${(props) => (props.active ? "0" : "-100%")};
    left: 0;
    width: 100%;
    background-color: ${color.fourColor};
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
    z-index: 2;
    padding: 1rem 0.25rem 2rem;
  }
  @media screen and (min-width: 768px) {
    // margin-left: auto;
  }
`;

export const NavLinks = styled.div`
  display: grid;
  grid-template-row: repeat(2, 1fr);
  row-gap: 0.5rem;
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 1rem;
    justify-content: flex-end;
  }
`;

export const NavLink = styled(Link)`
  padding: 0.7rem 1.25rem;
  cursor: pointer;
  color: ${color.main};
  font-size: 0.75rem;

  &:hover {
    color: ${color.thirdColor};
  }
  @media screen and (min-width: 768px) {
    color: ${color.black_off};
    padding: 0.7rem 0.5rem;
    font-size: 1rem;
    &::after {
      display: block;
      content: "";
      border-bottom: solid 3px ${color.thirdColor};
      transform: scaleX(0);
      transition: all 300ms ease-in-out;
    }
    &:hover {
      color: ${color.thirdColor};
    }
    &:hover:after {
      padding-top: 0.1rem;
      transform: scaleX(1);
    }
  }
`;
