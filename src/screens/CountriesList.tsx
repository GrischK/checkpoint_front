import React from 'react';
import {gql, useQuery} from '@apollo/client';

interface Country {
    name: string;
}

interface CountriesData {
    countries: Country[];
}

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
query GetCountries {
  countries {
    name
  }
}
`;

// create a component that renders a select input for countries
function CountriesList() {
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
                    <li key={index}>{country.name}</li>
                ))}
            </div>
        </div>
    );
}

export default CountriesList;
