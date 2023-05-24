import React, {ChangeEvent, useState} from 'react';
import {gql, useQuery} from '@apollo/client';
import {NavLink} from "react-router-dom";
import {polyfillCountryFlagEmojis} from "country-flag-emoji-polyfill";
import {TextField} from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchedCountry(event.target.value);
    };


    const {data, loading, error} = useQuery<CountriesData>(LIST_COUNTRIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const countries = data?.countries ?? [];

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchedCountry.toLowerCase())
    );

    const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 11,
        },
    }));
    return (
        <div className="main_container">
            <h1>Countries list</h1>
            <TextField id="outlined-basic" label="Search a country" variant="outlined" onChange={handleChange}
            />
            <div className="countries_list">
                {filteredCountries.map((country: Country, index: number) => (
                    <LightTooltip title={country.name} placement="top">
                        <NavLink to={`/country/${country.code}`} key={index} className="country_link">
                            <li>{country.name}</li>
                            <span>{country?.emoji}</span>
                        </NavLink>
                    </LightTooltip>
                ))}
            </div>
        </div>
    );
}

export default CountriesList;
