import React from 'react';
import {gql, useQuery} from '@apollo/client';

interface Country {
    name: string;
    // Add more properties as needed (e.g., code)
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

// create a component that renders a select input for coutries
function CountrySelect() {
    const {data, loading, error} = useQuery<CountriesData>(LIST_COUNTRIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const countries = data?.countries ?? [];

    console.log(data)

    return (
        <div className="App">
            {countries.map((country: Country, index:number) => (
                <li key={index}>{country.name}</li>
            ))}
        </div>
    );
}

export default CountrySelect;
