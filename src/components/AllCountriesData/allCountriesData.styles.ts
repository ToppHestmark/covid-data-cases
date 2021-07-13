import styled from "styled-components";

export const SearchBox = styled.div`
  width: 100%;
  margin: 2em 0;
  display: flex;
  justify-content: center;

  input {
    border: none;
    border-bottom: 2px solid gray;
    padding-bottom: 0.2em;
    font-size: 1.2rem;

    &:focus {
      outline: 0;
    }
  }
`;

export const TableContainer = styled.table`
  min-height: 20vh;
`;

export const Head = styled.thead`
  tr {
    position: sticky;
    top: 0;
    background: white;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Body = styled.tbody`
  td {
    padding: 0.5em 0;
    margin: 0;
    border-bottom: 0.5px solid gray;
  }

  .spacing {
    padding: 0 1.2rem;
  }
`;
