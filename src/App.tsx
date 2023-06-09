import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./screens/Home";
import CountriesList from "./screens/CountriesList";
import ContinentsList from "./screens/ContinentsList";
import NavBar from "./components/NavBar";
import Continent from "./screens/Continent";
import Country from "./screens/Country";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/continents" element={<ContinentsList/>}/>
                <Route path="/countries" element={<CountriesList/>}/>
                <Route path="/continent/:continentCode" element={<Continent/>}/>
                <Route path="/country/:countryCode" element={<Country/>}/>
            </Routes>
        </>

    );
}

export default App;
