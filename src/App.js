import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HOME from "../src/navigation/pages/Home";
import Main from "../src/navigation/pages/Main";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
const App = ()=> {
    return (
        <NavigationContainer independent = {true}>
        <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name = "Home" component = {HOME}/>
        <Stack.Screen name = "Main" component={Main}/>
        
        </Stack.Navigator>
        </NavigationContainer>
        
    );
}


export default App;
