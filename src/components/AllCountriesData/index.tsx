import React, { ChangeEvent, useState } from "react";
import {
  SearchBox,
  TableContainer,
  Head,
  Body,
} from "./allCountriesData.styles";
import { formatLargeNum } from "../../utils/formatNum";

import { CovidData } from "../../api.models";

type AllCountriesDataProps = {
  allCountriesData: CovidData[];
};

const AllCountriesData = ({ allCountriesData }: AllCountriesDataProps) => {
  const [search, setSearch] = useState("");

  const filteredCountriesData: CovidData[] = allCountriesData.filter(
    (con) =>
      con.Country.toLowerCase().includes(search.toLowerCase()) ||
      con.Continent.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <>
      <SearchBox>
        <input
          type="text"
          placeholder="Search countries or continents"
          onChange={handleChange}
        />
      </SearchBox>
      <TableContainer cellSpacing="0" cellPadding="0">
        <Head>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>
              <div>Total</div> <div>Cases</div>
            </th>
            <th>
              {" "}
              <div>Total</div>
              <div>Deaths</div>{" "}
            </th>
            <th>
              <div>Total</div>
              <div>Recovered</div>
            </th>
            <th>
              <div>Active</div>
              <div>Cases</div>
            </th>
            <th>
              <div>Total</div>
              <div>Tests</div>
            </th>
            <th>Population</th>
          </tr>
        </Head>
        <Body>
          {filteredCountriesData.map((country) => {
            if (country?.rank === 0) return "";

            return (
              <tr key={country.id}>
                <td> {country?.rank} </td>
                <td className="spacing"> {country.Country} </td>
                <td className="spacing">
                  {formatLargeNum(country?.TotalCases)}
                </td>
                <td className="spacing">
                  {" "}
                  {formatLargeNum(country?.TotalDeaths)}{" "}
                </td>
                <td className="spacing">
                  {" "}
                  {formatLargeNum(parseInt(country?.TotalRecovered))}{" "}
                </td>
                <td className="spacing">
                  {" "}
                  {formatLargeNum(country?.ActiveCases)}{" "}
                </td>
                <td className="spacing">
                  {" "}
                  {formatLargeNum(parseInt(country?.TotalTests))}{" "}
                </td>
                <td className="spacing">
                  {" "}
                  {formatLargeNum(parseInt(country?.Population))}{" "}
                </td>
              </tr>
            );
          })}
        </Body>
      </TableContainer>
    </>
  );
};

export default AllCountriesData;
