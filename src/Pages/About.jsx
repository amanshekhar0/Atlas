import React from 'react';
import countryFacts from "../API/countryData.json";

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='container-title'>Here are interesting facts about some countries</h1>
      <br />
      <br />
      <div className="cards">
        {
          countryFacts.map((country) => {
            const { id, countryName, capital, population, interestingFact } = country; // Updated property names
            return (
              <div className="card" key={id}>
                <div className="box">
                  <p className='card-title'>{countryName}</p>
                  <p>
                    <span className='card-description'>Capital: </span>
                    <span className='highlight'>{capital}</span>
                  </p>
                  <p>
                    <span className='card-description'>Population: </span>
                    <span className='highlight'>{population}</span>
                  </p>
                  <p>
                    <span className='card-description'>Interesting Fact: </span>
                    <span className='highlight'>{interestingFact}</span>
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default About;
