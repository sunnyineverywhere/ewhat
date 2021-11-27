import React, {useContext} from "react";
import { StyleSheet } from "react-native";
import subjectContext, {SubjectConsumer} from "./context/subject";
import { startviewStyles } from "../styles";
import { Text } from "react-native";

const Subject = () => {
    const {subject} = useContext(subjectContext);
    return <Text style = {startviewStyles.startTitle}>Number: {subject.number}</Text>;
}

export default Subject;