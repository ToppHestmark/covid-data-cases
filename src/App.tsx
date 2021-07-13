import React, { useState, useEffect } from "react";
import { Header, WorldwideData, AllCountriesData, Footer } from "./components";

import { CovidData } from "./api.models";
import { feetchCovidData } from "./api";

const App: React.FC = () => {
  const [worldData, setWorldData] = useState<CovidData[]>({} as CovidData[]);
  const [allCountriesData, setAllCountriesData] = useState<CovidData[]>(
    {} as CovidData[]
  );

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const getWorldData = await feetchCovidData("world");
      const getAllCountriesData = await feetchCovidData("");

      setWorldData(getWorldData);
      setAllCountriesData(getAllCountriesData);
    };

    fetchDataFromApi();
  }, []);

  return (
    <>
      <Header text="Covid-19 Data and Cases" />
      <WorldwideData worldwideData={worldData} />
      <AllCountriesData allCountriesData={allCountriesData} />
      <Footer />
    </>
  );
};

export default App;
