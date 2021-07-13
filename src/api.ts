import { CovidData } from "./api.models";

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
    throw new Error("Something went wrong when fetching data!");
  }

  return await res.json();
};
