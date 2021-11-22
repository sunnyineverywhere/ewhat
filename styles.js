import { StyleSheet } from 'react-native';
import {theme} from './theme';

export const viewStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: theme.background,
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
        fontSize: 25,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    menuText:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#D0CAB2',
        margin: 10,
    }
});
export const Buttonstyles = StyleSheet.create({
    button:{
        marginBottom: 3,
        alignContent: 'center',
        backgroundColor: "white",
    },
    mainBtn:{
        fontSize: 25,
        fontWeight: '600',
        marginHorizontal: 10,
        color: "black",
    }
});