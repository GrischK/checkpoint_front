import React from 'react';
import {gql, useQuery} from '@apollo/client';

interface Continent {
    name: string;
}

interface ContinentsData {
    continents: Continent[];
}

// write a GraphQL query that asks for names and codes for all continents
const LIST_CONTINENTS = gql`
query GetContinents {
  continents {
    name
  }
}
`;

function ContinentsList() {
    const {data, loading, error} = useQuery<ContinentsData>(LIST_CONTINENTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const continents = data?.continents ?? [];

    console.log(data)

    return (
        <div className="App">
            {continents.map((continent: Continent, index:number) => (
                <li key={index}>{continent.name}</li>
            ))}
        </div>
    );
}

export default ContinentsList;
