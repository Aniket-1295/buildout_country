import React, { useState, useEffect } from 'react';


 const Countrieslist = () => {
const [countries, setCountries] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://xcountries-backend.azurewebsites.net/all');
        const res= await response.json()
        setCountries(res);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError(err.message);
      }
    };

    fetchCountries();
  }, []);


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
     <div className="country-container">
      {countries.map((country) => (
        <div key={country.name} className="country-card">
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            className="country-flag"
          />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Countrieslist;
