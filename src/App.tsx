import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./screens/Home";
import CountriesList from "./screens/CountriesList";
import ContinentsList from "./screens/ContinentsList";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/continents" element={<ContinentsList/>}/>
            <Route path="/countries" element={<CountriesList/>}/>
        </Routes>
    );
}

export default App;
