import React from "react";
import { Container } from "./footer.styles";

const Footer = () => {
  return (
    <Container>
      <div>
        API by{" "}
        <a
          href="https://rapidapi.com/vaccovidlive-vaccovidlive-default/api/vaccovid-coronavirus-vaccine-and-treatment-tracker/"
          target="_blank"
          rel="noreferrer"
        >
          VACCOVID
        </a>
      </div>
      <div>
        Project Repository:{" "}
        <a
          href="https://github.com/ToppHestmark/covid-data-cases"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </Container>
  );
};

export default Footer;
