import React from "react";
import styled, {ThemeProvider} from 'styled-components/native'
import 'react-native-gesture-handler';
import { Component } from "react";
import { Button, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { startviewStyles } from "../../components/styles";
import { theme } from "../../components/theme";
import Inputs from "../../components/SubjectInput/Inputnames";

import { useState } from "react";


const InputSubject = ({navigation}) => {
    const [newTask, setNewTask] = useState('');

    const _addTask = () => {
        alert(`Add: &{newTask}`);
        setNewTask('');
    }

    const _handleTextChange = text => {
        setNewTask(text);
    }

    return(
        <ThemeProvider theme = {theme}>
            <Container>
                <StatusBar 
                    barStyle='light-content'     
                />
                <Title>Input lectures</Title>
                <Inputs 
                    placeholder = "+ Add subjects"
                    value = {newTask}
                    onChangeTest = {_handleTextChange}
                    onSubmitEditing = {_addTask}/>
              
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
