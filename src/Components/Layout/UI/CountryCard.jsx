import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <div>
      <li className="country-card card">
        <div className="container-cardss">
          <img src={flags.svg} alt={flags.alt} />
          <div className="countryInfo">
            <p className="card-title">{name.common}</p>
            <p>
              <span className="card-description">Population</span>
              {population.toLocaleString()}
            </p>
            <p>
              <span className="card-description">Region</span>
              {region}
            </p>
            <p>
              <span className="card-description">Capital</span>
              {capital[0]}
            </p>
            <NavLink to={`/country/${name.common}`}>
              <button className="read-more">Read More</button>
            </NavLink>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CountryCard;
