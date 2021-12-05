import React, {useContext} from "react";
import { StyleSheet } from "react-native";
import subjectContext, {SubjectConsumer} from "./context/subject";
import { startviewStyles } from "../styles";
import { Text } from "react-native";
import { theme } from "../theme";

const Subject = () => {
    const {subject} = useContext(subjectContext);
    return <Text style = {styles.text}>Number: {subject.number}</Text>;
}

const styles = StyleSheet.create({
    text:{
        fontSize: 60,
        fontWeight: '800',
        color: theme.main,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    }
})

export default Subject;