import React from "react";
import styled, {ThemeProvider} from 'styled-components/native'
import 'react-native-gesture-handler';
import { Component } from "react";
import { Button, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { startviewStyles } from "../../components/styles";
import { theme } from "../../components/theme";
import Inputnames from "../../components/Inputnames";


const InputSubject = ({navigation}) => {
    return(
        <ThemeProvider theme = {theme}>
            <Container>
                <StatusBar 
                    barStyle='light-content'     
                />
                <Title>Input lectures</Title>
                <Inputnames plaehorder = "+ Add subjects"/>
                <Button title = "next" onPress = {() => navigation.navigate('Main')} />
            </Container>
        </ThemeProvider>
    );
};

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #101010;
`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: #63855d;
    align-self: flex-start;
    margin: 20px;`



export default InputSubject;

/*
           <Button 
            title = "move to calandar"
            onPress = {() => navigation.navigate('FirstSetting')} />
            */
