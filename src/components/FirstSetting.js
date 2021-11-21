import {useState} from "react";
import * as React from 'react'
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { startviewStyles } from "../styles";
import { StyleSheet } from "react-native";

const FirstSetting = () => {
    const [count, setCount] = useState(0);

    return (
    <SafeAreaView style = {startviewStyles.container}>
        <Text style={startviewStyles.startTitle}>Lectures: {count} </Text>
        <Pressable style = {FSstyles.button}onPress={() => {setCount(count+1);}}>
            <Text style={FSstyles.text}>+</Text>
        </Pressable>
        <Pressable style = {FSstyles.button}onPress={() => {setCount(count-1);}}>
            <Text style={FSstyles.text}>-</Text>
        </Pressable>
    </SafeAreaView>
    )
}

const FSstyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 0,
        elevation: 3,
        backgroundcolor: '#FDFFFD',
    },
    text: {
        fontsize: 20,
        lineHeight: 14,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#035A15',
    },
});

export default FirstSetting;