import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {NavLink} from "react-router-dom";

interface Continent {
    name: string;
    code: string;
}

interface ContinentsData {
    continents: Continent[];
}

// write a GraphQL query that asks for names and codes for all continents
const LIST_CONTINENTS = gql`
query GetContinents {
  continents {
    name
    code
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
        <div className="main_container">
            <h1>Liste des continents</h1>
            <div className="continents_list">
                {continents.map((continent: Continent, index: number) => (

                    <NavLink className='cardLink' key={index} to={`/${continent.name}/${continent.code}`}>
                        <li>
                            <span>{continent.name}</span>
                            <span>{continent.code}</span>
                        </li>
                    </NavLink>)
                )}
            </div>
        </div>
    );
}

export default ContinentsList;
