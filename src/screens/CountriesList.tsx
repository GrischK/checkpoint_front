import React, {useState} from 'react';
import {gql, useQuery} from '@apollo/client';
import {NavLink} from "react-router-dom";
import {polyfillCountryFlagEmojis} from "country-flag-emoji-polyfill";
import {TextField} from "@mui/material";

interface Country {
    name: string;
    code: string;
    emoji: string;
}

interface CountriesData {
    countries: Country[];
}

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
query GetCountries {
  countries {
    name
    code
    emoji
  }
}
`;

// create a component that renders a select input for countries
function CountriesList() {
    polyfillCountryFlagEmojis();
    const [searchedCountry, setSearchedCountry] = useState('');

    const handleChange = (event:any) => {
        setSearchedCountry(event.target.value);
    };


    const {data, loading, error} = useQuery<CountriesData>(LIST_COUNTRIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const countries = data?.countries ?? [];

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchedCountry.toLowerCase())
    );

    // console.log(data)

    return (
        <div className="main_container">
            <h1>Countries list</h1>
            <TextField id="outlined-basic" label="Search a country" variant="outlined" onChange={handleChange}
            />
            <div className="countries_list">
                {filteredCountries.map((country: Country, index: number) => (
                    <NavLink to={`/country/${country.code}`} key={index} className="country_link">
                        <li>{country.name}</li>
                        <span>{country?.emoji}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default CountriesList;
