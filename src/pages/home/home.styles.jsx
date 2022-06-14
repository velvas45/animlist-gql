import styled from "@emotion/styled";
import { color } from "data/variable-color";

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
`;

export const SectionContent = styled.div`
  display: grid;
  margin-bottom: 1rem;
  grid-template-columns: repeat(4, 250px);
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 250px);
    gap: 1rem;
  }
  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 250px);
    gap: 1rem;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 250px);
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;
