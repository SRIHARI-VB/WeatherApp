import React from "react";
import styled from "styled-components";
// import logo from "../../public/assets/WeatherIcons.gif";
import "bootstrap/dist/css/bootstrap.css";
import SearchBox from "./SearchBox";
import CityLabel from "../components/city-components/CityLabel";
import WeatherLogo from "../components/weather-components/WeatherLogo";


const Logo = styled.img`
    height: 8rem;
    width: 8rem;
    margin: 2.5rem auto;
    
`;


const CityComponent = (props) => {
    const {updateCity, fetchWeather} = props;
    return (
        <>
            {/* <Logo src={logo} alt="logo" /> */}
            <WeatherLogo src="./assets/WeatherIcons.gif" alt="logo"/>
            <CityLabel>Find Weather of your city</CityLabel>
            
            <SearchBox onSubmit={fetchWeather}>
                <input className="form-control"  placeholder="City" onChange={(e)=>updateCity(e.target.value)}></input>
                <button type="submit" className="btn btn-primary">Search</button>
            </SearchBox>
        </>
    );
};
export default CityComponent;
