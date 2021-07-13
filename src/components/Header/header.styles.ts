import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.h1`
  padding: 1em 0.125em;
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1.875rem;
  }
`;
