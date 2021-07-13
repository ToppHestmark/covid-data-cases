import styled from "styled-components";

export const Section = styled.section`
  margin-top: 2em;
  text-align: center;

  h2 {
    font-weight: 500;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const InfoWrapper = styled.div`
  text-align: center;
  margin: 1.25em;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 300;
`;

export const Cases = styled.h6`
  font-size: 3rem;
  font-weight: 500;

  &.danger {
    color: ${(props) => props.theme.colors.danger};
  }

  &.success {
    color: ${(props) => props.theme.colors.success};
  }
`;
