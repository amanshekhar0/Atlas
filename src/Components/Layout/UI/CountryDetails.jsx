import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndvisualData } from "../../../API/PostAPI";
import Loader from "./Loader";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndvisualData(params.id);
        if (res.status === 200) {
          setCountry(res.data[0]);
        } else {
          console.error('Failed to fetch country details.');
        }
      } catch (err) {
        console.error('Error fetching country data:', err);
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;

  return (
    <div>
      <section className="card country-details-card container">
        {country && (
          <div className="container-card">
            <div className="country-image">
              <img 
                src={country.flags.svg} 
                alt={country.flags.alt} 
                className="flag" 
              />
            </div>
            <div className="country-content">
              <p className="card-title"> {country.name.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names:</span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description">Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description">Capital:</span>
                  {country.capital}
                </p>
                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="card-description">Currencies:</span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages:</span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="button">
            <NavLink to="/country">
                <button className="goBack">Go Back</button>
            </NavLink>
        </div>
      </section>
    </div>
  );
};

export default CountryDetails;
