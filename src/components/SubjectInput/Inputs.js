import React from "react";
import styled from "styled-components/native";
import { useWindowDimensions } from "react-native";
import PropsTypes from 'prop-types'
import { Input } from "react-native-elements/dist/input/Input";

const StyledInput = styled.TextInput`
    width: ${
        ({width}) => width - 80
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

const Inputs = ({placeholder, value, onChangeText, onSubmitEditing, onBlur}) => {
    const width = useWindowDimensions.width;
    
    return (
        <StyledInput
        width={width}
        placeholder={placeholder}
        maxLength={50}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        keyboardAppearance="dark" // iOS only
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}
      />
    );
};

Inputs.prototype = {
    placeholder: PropsTypes.string,
    value: PropsTypes.string.isRequired,
    onChangeText: PropsTypes.func.isRequired,
    onSubmitEditing: PropsTypes.func.isRequired,
    onBlur: PropsTypes.func.isRequired,
}


export default Inputs;