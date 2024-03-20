import React from "react";
import styled from "styled-components";

const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    font-weight: 500;
    margin: 0.5rem auto;
    & input{
        padding: 0.5rem;
    }
    gap: 0.5rem;

    &button{
        cursor: pointer;
    }
`;


export default SearchBox;