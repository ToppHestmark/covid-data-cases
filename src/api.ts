export interface CovidData {
  id: string;
  rank: number;
  Country: string;
  Continent: string;
  TwoLetterSymbol: string | null;
  ThreeLetterSymbol: string | null;
  Infection_Risk: number;
  Case_Fatality_Rate: number;
  Test_Percentage: number;
  Recovery_Proporation: number;
  TotalCases: number;
  NewCases: number;
  TotalDeaths: number;
  NewDeaths: number;
  TotalRecovered: string;
  NewRecovered: number;
  ActiveCases: number;
  TotalTests: string;
  Population: string;
  Deaths_1M_pop: number;
  Serious_Critical: number;
  Tests_1M_Pop: number;
  TotCases_1M_Pop: number;
}

export const feetchCovidData = async (
  continent?: string
): Promise<CovidData[]> => {
  const res = await fetch(
    `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${continent}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY as string,
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Something went horrible wrong!");
  }

  const json = await res.json();

  return await json;
};
