import React from "react";
import styled from "styled-components";
import InfoIcon from "./weather-components/InfoIcon";
import InfoText from "./weather-components/InfoText";
import InfoContainer from "./weather-components/InfoContainer";
import WeatherIconsCollection from "./WeatherIconsCollection";

   
const WeatherInfoComponent = ({name, value})=>{

    return (
        
        <InfoContainer>
            <InfoIcon src={WeatherIconsCollection[name]} alt="" />
            <InfoText>
                {value }
                <span>{name}</span>
            </InfoText>
        </InfoContainer>
    )
}
export default WeatherInfoComponent;