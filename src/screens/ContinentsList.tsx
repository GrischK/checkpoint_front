import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {NavLink} from "react-router-dom";
import {Chip} from "@mui/material";

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
            <h1>Continents list</h1>
            <div className="continents_list">
                {continents.map((continent: Continent, index: number) => (

                    <NavLink key={index} to={`/continent/${continent.code}`}>
                        <Chip
                            label={continent.name}
                            component="a"
                            href="#basic-chip"
                            clickable
                            color="primary"
                        />
                    </NavLink>)
                )}
            </div>
        </div>
    );
}

export default ContinentsList;
