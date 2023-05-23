import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {NavLink} from "react-router-dom";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

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

    const {data, loading, error} = useQuery<CountriesData>(LIST_COUNTRIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const countries = data?.countries ?? [];

    console.log(data)

    return (
        <div className="main_container">
            <h1>Liste des pays</h1>
            <div className="countries_list">
                {countries.map((country: Country, index:number) => (
                    <NavLink to={`/country/${country.code}`} key={index}>
                        <li>{country.name}</li>
                        <span>{country?.emoji}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default CountriesList;
