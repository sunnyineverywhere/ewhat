import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/Stack";
import { LogContextProvider } from "./components/context/LogContext";
import { SearchContextProvider } from "./components/context/SearchContext";
import { SubjectContextProvider } from "./components/context/SubjectContext";


const App = () => {
    return(
        
        <NavigationContainer independent={true}>
            <LogContextProvider>
                <SearchContextProvider>
                    <SubjectContextProvider>
                         <StackNavigation />
                    </SubjectContextProvider>
                </SearchContextProvider>
            </LogContextProvider>
        </NavigationContainer>
    )
};


export default App;
