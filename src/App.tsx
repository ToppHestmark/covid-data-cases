import React, { useState, useEffect } from "react";

import { CovidData } from "./api";
import { feetchCovidData } from "./api";

const App: React.FC = () => {
  const [continent, setContinent] = useState<CovidData[]>({} as CovidData[]);

  feetchCovidData("world");

  useEffect(() => {
    const fetchFromApi = async () => {
      const result = await feetchCovidData("world");
      setContinent(result);
    };

    fetchFromApi();
  }, []);

  return (
    <div>
      <h1>Hello Covid</h1>
      {continent.map((con) => console.log(con.ActiveCases))}
    </div>
  );
};

export default App;
