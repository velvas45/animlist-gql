import styled from "@emotion/styled/macro";
import { css } from "@emotion/react";

import { color } from "data/variable-color";

const style_font_title = css`
  color: ${color.black};
  font-weight: 700;
  font-size: 1.3rem;
  padding: 1.2rem 1.2rem 0.8rem;
`;

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 0 4rem;

  @media screen and (min-width: 768px) {
    padding: 6rem 0 2rem;
    width: 80%;
  }

  img {
    object-fit: cover;
    border-radius: 0.25rem;
    height: 400px;
    width: 400px;
  }
`;

export const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  position: relative;
  min-height: 450px;
  padding-bottom: 1rem;

  border: 2px solid #f2f2f2;
  background: ${color.white_off};
  border-radius: 1rem;

  .section__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    min-width: 400px;
    img {
      border-radius: 1rem;
      height: 400px;
      width: 100%;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: none;
    text-align: center;
    row-gap: 11rem;

    .section__left {
      height: 300px;
      min-width: 100%;

      img {
        width: 100%;
      }
    }
    padding: 0;
  }
`;

export const SectionDetail = styled.div`
  width: 100%;
  padding: 1rem;
  h3 {
    ${style_font_title}
    width: 65%;
  }

  .description__text {
    padding: 1rem;
    margin: 0 0.5rem 1rem;

    p {
      font-weight: light;
      text-align: justify;
    }
  }
  .section__detail-type {
    padding: 1.2rem 1.2rem 0.8rem;
    font-size: 14px;
  }

  .section__detail-studios {
    padding: 0.6rem 1.2rem;

    .section__detail-studios-item {
      margin-left: 3px;
      color: ${color.thirdColor};
      font-weight: 500;
      font-size: 1rem;

      &:not(:last-child)::after {
        content: ",";
      }
    }
  }

  .description__character {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;

    p {
      padding-left: 0.8rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    .section__detail-type {
      font-size: 11px;
    }

    h3 {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 1024px) {
    .description__character {
      margin-bottom: 3.5rem;
      justify-content: center;
    }
  }

  .section__detail-genres {
    color: ${color.thirdColor};
  }
`;

export const SectionTableDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  .table__contents {
    padding: 0.5rem 0 0.5rem 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    .table__content-item {
      &:hover {
        background: #f3f3f3;
      }

      .table__content-label {
        display: inline;
        width: 400px;
      }
    }
  }
`;

export const SectionRating = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
  min-height: 50px;
  background: ${color.main};
  color: ${color.white_off};
  // opacity: 0.65;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  min-width: max-content;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 1.5rem;
  @media screen and (max-width: 1024px) {
    bottom: 0;
    top: initial;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    .section__detail-rating {
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      justify-content: center;
      border-bottom: none !important;
    }
  }
  .section__detail-rating {
    display: flex;
    font-size: 1.8rem;
    font-weight: 700;
    align-items: center;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid ${color.white_off};
    .section__detail-flex {
      position: relative;
      display: flex;
      flex-direction: column;
      row-gap: 0.1rem;
      font-size: 0.65rem;
      text-align: left;
      font-weight: 400 !important;
      margin-left: 0.1rem;
      span {
        font-size: 0.6rem;
      }

      .section__detail-rating-all {
        color: rgba(255, 255, 255, 0.5);
      }
    }
    .ml-10 {
      margin-left: 1rem;
    }

    .section__detail-flex.ml-10 {
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: -10px;
        top: 0.22rem;
        width: 1px;
        height: 15px;
        color: #fff;
        margin-right: 20px;
        background: gray;
      }
    }
  }
`;

export const AddCollectionDiv = styled.div`
  margin-top: 1rem;
  padding: 0.7rem 1rem;
  border-radius: 0.8rem;
  background: ${color.primary};
  color: ${color.white_off};
  text-align: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  &:hover {
    background: #007bed;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export const TemplateSuccess = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    height: 300px;
  }

  p {
    font-size: 1.2rem;
  }
`;
