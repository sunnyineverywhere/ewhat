import React from "react";
import { StyleSheet } from "react-native";
import subjectContext from "../../components/context/subject";
import { subjectProvider } from "../../components/context/subject";
import Subject from "../../components/subject";
import Input from "../../components/AddSubject";
import { SafeAreaView } from "react-native-safe-area-context";

const FirstSetting = () => {


    return (
        <subjectProvider>
            <SafeAreaView>
                <Subject />
                <Input />
            </SafeAreaView>
        </subjectProvider>

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
        fontsize: 40,
        lineHeight: 14,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#035A15',
    },
});

export default FirstSetting;

/*

        <Pressable style = {FSstyles.button} onPress={() => {setCount(count+1);}}>
            <Text style={FSstyles.text}>+</Text>
        </Pressable>
        <Pressable style = {FSstyles.button} onPress={() => {setCount(count-1);}}>
            <Text style={FSstyles.text}>-</Text>
        </Pressable>
        <Pressable style = {FSstyles.button} onPress={() => {}}>
            <Text style={FSstyles.text}>Summit</Text>
        </Pressable>

*/