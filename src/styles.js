import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const startviewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgrond,
        alignItems:'center',
        justifyContent: 'center'
    },
    startTitle: {
        fontSize: 60,
        fontWeight: '800',
        color: theme.main,
        alignItems: 'center',
        justifyContent: 'center',
    },
})