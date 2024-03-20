import React from "react";
import styled from "styled-components";

const InfoText = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 0.5rem;
    color: #f6f6f6;
    & span {
        font-size: 0.8rem;
        text-transform: capitalize;
    }

`;

export default InfoText;