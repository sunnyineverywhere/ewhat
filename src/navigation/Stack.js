import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HOME from "./pages/Home";
import FirstSetting from "./pages/FirstSetting";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName = "Home">
            <Stack.Screen name = "FirstSetting" component = {FirstSetting}/>
            <Stack.Screen name = "Home" component = {HOME}/>
            
        </Stack.Navigator>
    );
};

export default StackNavigation;
