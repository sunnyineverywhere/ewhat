import React from "react";
import 'react-native-gesture-handler';
import {Button} from 'react-native'
import { SafeAreaView,Text } from "react-native";
import { startviewStyles } from "../../components/styles"; 

const HOME = ({navigation}) => {
    return(
        <SafeAreaView style = {startviewStyles.container}>
            <Text style = {startviewStyles.startTitle}>EWHAT</Text>
            <Button 
            title = "init"
            color = "#224E41"
            onPress = {() => navigation.navigate('Main')} />
        </SafeAreaView>
    );
};

export default HOME;