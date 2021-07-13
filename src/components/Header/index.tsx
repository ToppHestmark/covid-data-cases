import React from "react";
import { HeaderContainer, HeaderText } from "./header.styles";

interface Props {
  text: string;
}

const Header: React.FC<Props> = ({ text }) => {
  return (
    <HeaderContainer>
      {" "}
      <HeaderText> {text} </HeaderText>{" "}
    </HeaderContainer>
  );
};

export default Header;
