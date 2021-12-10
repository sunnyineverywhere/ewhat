import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const startviewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.dark,
        alignItems:'center',
        justifyContent: 'center'
    },
    startTitle: {
        fontSize: 60,
        fontWeight: '800',
        color: theme.color1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const viewStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.background,
    },
    header:{
        flexDirection: 'row',
    }
});
export const textStyles = StyleSheet.create({
    title:{
        fontSize: 35,
        fontWeight: '600',
        color: theme.main,
        marginTop: 0,
        marginLeft: 3,
    },
    menu:{
        alignItems: 'center',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#E4EEED',
    },
    menuText:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#224E41',
        margin: 10,
    },

    delNsort: {

        alignItems: 'center',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#E4EEED',

    }
});
export const Buttonstyles = StyleSheet.create({
    button:{
        color: '#224E41',
        fontSize: 16,
        marginBottom: 3,
        backgroundColor: '#42806B',
    },
    mainBtn:{
        fontSize: 25,
        fontWeight: '600',
        marginHorizontal: 10,
        color: '#E4EEED',
    }
});
