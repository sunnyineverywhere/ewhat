import React from "react";
import 'react-native-gesture-handler';
import { Component } from "react";
import {Button} from 'react-native'
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { startviewStyles } from "../../components/styles";

const HOME = ({navigation}) => {
    return(
        <SafeAreaView style = {startviewStyles.container}>
            <Text style = {startviewStyles.startTitle}>Please-attendence</Text>
            <Button 
            title = "init"
            color = "#224E41"
            onPress = {() => navigation.navigate('InputSubject')} />
        </SafeAreaView>
    );
};

export default HOME;