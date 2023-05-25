import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {useParams} from "react-router-dom";

interface ICountry {
    name: string;
    code: string;
    emoji: string
}

interface CountryData {
    country: ICountry;
}

// write a GraphQL query that asks for names and codes for all continents
const GET_COUNTRY = gql`
query GetCountry($ID: ID!) {
    country(code: $ID) {
    name
    code
    emoji
    }
}
`;

function Country() {
    const {countryCode} = useParams();

    console.log("countrycode"+countryCode)

    const {data, loading, error} = useQuery<CountryData>(GET_COUNTRY, {
        variables: {ID: countryCode},
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const country = data ;

    console.log(country)

    return (
        <div className="main_container">
            <h1>{country?.country.name}</h1>
            <h2>{country?.country.code}</h2>
        </div>
    );
}

export default Country;
