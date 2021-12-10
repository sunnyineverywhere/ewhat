import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/Stack";

const App = () => {
    return(
        
        <NavigationContainer independent={true}>
            <StackNavigation />
        </NavigationContainer>
    )
};


export default App;