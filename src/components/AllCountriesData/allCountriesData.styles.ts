import styled from "styled-components";

export const TableContainer = styled.table`
  min-height: 50vh;
`;
export const Head = styled.thead`
  tr {
    color: ${(props) => props.theme.colors.secondary};
    opacity: 0.75;
  }
`;

export const Body = styled.tbody`
  td {
    padding: 0.5em 0;
  }

  .spacing {
    padding: 0 1.2rem;
  }
`;
