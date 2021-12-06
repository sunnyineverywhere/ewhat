import React from "react";
import { StyleSheet } from "react-native";
import SubjectContext from "../../components/context/subject";
import { SubjectProvider } from "../../components/context/subject";
import Subject from "../../components/subject";
import SubjectInput from "../../components/AddSubject";
import { View } from "react-native";
import { Button } from "react-native";

const FirstSetting = ({navigation}) => {
    return (
        <SubjectProvider>
            <View style={FSstyles.view}>
                
                    <Subject />
                    <SubjectInput />
                    <Button 
            title = "next"
            onPress = {() => navigation.navigate('InputSubject')} />
            </View>
            </SubjectProvider>   

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
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:'#101010',
    }
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