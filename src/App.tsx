import React, { useState, useEffect } from "react";
import { Header, WorldwideData } from "./components";

import { CovidData } from "./api.models";
import { feetchCovidData } from "./api";

const App: React.FC = () => {
  const [worldData, setWorldData] = useState<CovidData[]>({} as CovidData[]);

  useEffect(() => {
    const fetchWorldDataFromApi = async () => {
      const result = await feetchCovidData("world");
      setWorldData(result);
    };

    fetchWorldDataFromApi();
  }, []);

  return (
    <>
      <Header text="Covid-19 Data and Cases" />
      <WorldwideData worldwideData={worldData} />
    </>
  );
};

export default App;
