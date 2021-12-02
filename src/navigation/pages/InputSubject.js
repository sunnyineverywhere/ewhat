import React from "react";
import 'react-native-gesture-handler';
import { Component } from "react";
import {Button} from 'react-native'
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { startviewStyles } from "../../styles";

const InputSubject = ({navigation}) => {
    return(
        <SafeAreaView style = {startviewStyles.container}>
            <Text style = {startviewStyles.startTitle}>Input each name of subjects</Text>
            <Button 
            title = "move to calandar"
            onPress = {() => navigation.navigate('FirstSetting')} />
        </SafeAreaView>
    );
};

export default InputSubject;