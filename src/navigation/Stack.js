import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HOME from "./pages/Home";
import FirstSetting from "./pages/FirstSetting";
import InputSubject from "./pages/InputSubject";
import Main from "./pages/Main";
/*
import CalendarView from "./pages/CalendarView";
*/

const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName = "Home">
            <Stack.Screen name = "FirstSetting" component = {FirstSetting}/>
            <Stack.Screen name = "Home" component = {HOME}/>
            <Stack.Screen name = "InputSubject" component = {InputSubject}/>
            <Stack.Screen name = "Main" component={Main}/>
            <Stack.Screen name = "Calendar" component = {CalendarView} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
