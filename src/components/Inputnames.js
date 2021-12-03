import React from "react";
import styled from "styled-components/native";
import { useWindowDimensions } from "react-native";

const StyledInput = styled.TextInput`
    width: ${
        ({width}) => width - 40
    }px;
    width: 100%;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: #808080;
    font-size: 25px;
    color: #035A15;
`

const Inputnames = ({placeholder}) => {
    const width = useWindowDimensions.width;
    return <StyledInput width = {width} placeholder = {placeholder} maxLength = {50}/>;
}

export default Inputnames;