import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h4>Total Country: {countries.length}</h4>

            <ul>
            {
                countries.map(countrie => <Country countrie={countrie} key={countrie.alpha3Code}></Country>)
            }
            </ul>
        </div>
    );
};

export default Home;