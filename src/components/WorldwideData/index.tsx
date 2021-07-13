import React from "react";
import {
  Section,
  Container,
  InfoWrapper,
  Title,
  Cases,
} from "./worldwideData.styles";
import { formatLargeNum } from "../../utils/formatNum";

import { CovidData } from "../../api.models";

interface Props {
  worldwideData: CovidData[];
}

const WorldwideData: React.FC<Props> = ({ worldwideData }) => {
  const worldData = worldwideData[0];

  return (
    <Section>
      <h2>Worldwide</h2>
      <Container>
        <InfoWrapper>
          <Title> Active Cases </Title>{" "}
          <Cases> {formatLargeNum(worldData?.ActiveCases)} </Cases>
        </InfoWrapper>
        <InfoWrapper>
          <Title> Total Cases </Title>{" "}
          <Cases> {formatLargeNum(worldData?.TotalCases)} </Cases>
        </InfoWrapper>
        <InfoWrapper>
          <Title> Total Deaths </Title>{" "}
          <Cases className="danger">
            {" "}
            {formatLargeNum(worldData?.TotalDeaths)}{" "}
          </Cases>
        </InfoWrapper>
        <InfoWrapper>
          <Title> Total Recovered </Title>{" "}
          <Cases className="success">
            {formatLargeNum(parseInt(worldData?.TotalRecovered))}
          </Cases>
        </InfoWrapper>
      </Container>
    </Section>
  );
};

export default WorldwideData;
