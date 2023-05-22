import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./screens/Home";
import CountriesList from "./screens/CountriesList";
import ContinentsList from "./screens/ContinentsList";
import NavBar from "./components/NavBar";
import Continent from "./screens/Continent";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/continents" element={<ContinentsList/>}/>
                <Route path="/countries" element={<CountriesList/>}/>
                <Route path="/:continentName/:continentCode" element={<Continent/>}/>
            </Routes>
        </>

    );
}

export default App;
