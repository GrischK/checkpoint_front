import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {Link, NavLink, useParams} from "react-router-dom";
import {polyfillCountryFlagEmojis} from "country-flag-emoji-polyfill";

interface Country {
    name: string;
    code : string;
}

interface Continent {
    name: string;
    code: string;
    countries: Country[];
}

interface ContinentData {
    continent: Continent;
}

// write a GraphQL query that asks for names and codes for all continents
const GET_CONTINENT = gql`
query GetContinent($ID: ID!) {
    continent(code: $ID) {
        name
        code
        countries {
            name 
            code
            }
    }
}
`;

function Continent() {
    const {continentCode} = useParams();

    console.log(continentCode)
    const {data, loading, error} = useQuery<ContinentData>(GET_CONTINENT, {
        variables: {ID: continentCode},
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const continent = data ;

    console.log("continent"+continent?.continent)

    return (
        <div className="main_container">
            <h1>{continent?.continent.name}</h1>
            <ul>
                {continent?.continent.countries.map((country:Country)=>(
                    <Link to={`/country/${country.code}`}>
                        <li>{country.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Continent;
