import React from "react";
import { Container } from "./footer.styles";

const Footer = () => {
  return (
    <Container>
      API by{" "}
      <a
        href="https://rapidapi.com/vaccovidlive-vaccovidlive-default/api/vaccovid-coronavirus-vaccine-and-treatment-tracker/"
        target="_blank"
        rel="noreferrer"
      >
        VACCOVID
      </a>
    </Container>
  );
};

export default Footer;
