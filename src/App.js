import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HOME from "../src/navigation/pages/Home";
import Main from "../src/navigation/pages/Main";
import { NavigationContainer } from '@react-navigation/native';
import { LogContextProvider } from "./components/context/LogContext";
import { SearchContextProvider } from "./components/context/SearchContext";
import { SubjectContextProvider } from "./components/context/SubjectContext";

const Stack = createStackNavigator();
const App = ()=> {
    return (
        
        <LogContextProvider>
        <SearchContextProvider>
            <SubjectContextProvider>
            <NavigationContainer independent = {true}>
        <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name = "Home" component = {HOME}/>
        <Stack.Screen name = "Main" component={Main}/>
        
        </Stack.Navigator>
        </NavigationContainer>
            </SubjectContextProvider>
        </SearchContextProvider>
    </LogContextProvider>
    );
}


export default App;
